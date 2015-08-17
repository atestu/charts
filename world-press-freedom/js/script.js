// Array.prototype.find - MIT License (c) 2013 Paul Miller <http://paulmillr.com>
// For all details and docs: https://github.com/paulmillr/array.prototype.find
(function(globals){
  if (Array.prototype.find) return;

  var find = function(predicate) {
    var list = Object(this);
    var length = list.length < 0 ? 0 : list.length >>> 0; // ES.ToUint32;
    if (length === 0) return undefined;
    if (typeof predicate !== 'function' || Object.prototype.toString.call(predicate) !== '[object Function]') {
      throw new TypeError('Array#find: predicate must be a function');
    }
    var thisArg = arguments[1];
    for (var i = 0, value; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) return value;
    }
    return undefined;
  };

  if (Object.defineProperty) {
    try {
      Object.defineProperty(Array.prototype, 'find', {
        value: find, configurable: true, enumerable: false, writable: true
      });
    } catch(e) {}
  }

  if (!Array.prototype.find) {
    Array.prototype.find = find;
  }
})(this);

const identity = c => c;

const ITEM_HEIGHT = 30;

const setVerticalPlacement = (data, { attr, accessor, scale }) => {
    // When countries are close labels would naturally overlap so it is necessary to compute a new placement for each one. This is how it works: Each label has a "buffer zone" (BZ) of about twice its height.
    var bzBounds = ITEM_HEIGHT,
        crowdedZones = [];

    data.forEach(c => c.bz = [scale(accessor(c)) - bzBounds/2, scale(accessor(c)) + bzBounds/2]);

    // We go through all BZs to determine Crowded Zones (CZ) which are groups of labels whose BZ overlap.
    // For instance:

    // - A
    // - B


    // - C
    // Here we have 2 CZ, one with A and B and one with C.
    var i = 0;
    for (var j = 0; j < data.length; j++) {
        var cz = crowdedZones[i],
            curr = data[j];
        if (!cz)
            crowdedZones.push([curr]);
        else {
            var prev = cz[cz.length-1];
            if (prev.bz[1] > curr.bz[0])
                cz.push(curr);
            else {
                crowdedZones.push([curr]);
                ++i;
            }
        }
    };

    // We then go through each zone to figure out placement:
    //     If there is a previous label, we place the label at the end of the previous BZ (adjusted to a 1/4 of the BZ size),
    //         If there is a next label, we place the label at the beginning of the next BZ (adjusted to a 1/4 of the BZ size)m
    //             Otherwize it's a single label in a CZ so place it where it would be originally.
    crowdedZones.forEach((cz, index, czs) => {
        let prev, curr, next;
        const originalLastBZBound = cz[cz.length - 1].bz[1];

        for (var j = 0; j < cz.length; j++) {
            prev = cz[j-1];
            curr = cz[j];
            next = cz[j+1];

            if (prev)
                curr[attr] = prev.bz[1] + bzBounds/4;
            else {
                if (next)
                    curr[attr] = next.bz[0] - bzBounds/4;
                else
                    curr[attr] = curr.bz[0] + bzBounds/2;
            }

            // calculate the new BZ for this label (new placement ±1/2 BZ) because that's what the next label should rely on for placement
            curr.bz = [curr[attr] - bzBounds/2, curr[attr] + bzBounds/2]
        };

        // now we readjust all points after based on how much we shifted the last element
        const adjustment = Math.ceil(curr.bz[1] - originalLastBZBound);

        czs.slice(index).forEach(cz => cz.forEach(z => {
            z.bz[0] += adjustment;
            z.bz[1] += adjustment;
        }))
    })

    return data;
}

d3.csv('/data/index-2.csv', row => {
    return {
        nom: row.nom,
        name: row.name,
        an2014: +row.an2014,
        dif2014: row.dif2014,
        sco2014: +row.sco2014,
        an2013: +row.an2013,
        sco2013: +row.sco2013,
        an2012: +row.an2012,
        iso: row.iso,
        capitale: row.capitale,
        latitude: row.latitude,
        longitude: row.longitude
    }
}, data => {
    const range = [0, data.length*ITEM_HEIGHT*1.61803398875]; // golden ratio… doesn't actually mean anything
    const domain = accessor => [5, d3.max(data.map(accessor))];

    let lists = d3.select('body')
        .append('div')
            .attr('id', 'lists');

    const series = [{
        title: '2013',
        attr: 'y',
        accessor: c => c.sco2013,
        scale: d3.scale.linear().domain(domain(c => c.sco2013)).range(range)
    }, {
        title: '2014',
        attr: 'y2',
        accessor: c => c.sco2014,
        scale: d3.scale.linear().domain(domain(c => c.sco2014)).range(range)
    }];

    series.forEach((serie, index) => {
        data = setVerticalPlacement(data.filter(serie.accessor).sort((a, b) => {
            return d3.ascending(serie.accessor(a), serie.accessor(b));
        }), serie);

        let list = d3.select('#lists')
            .append('div')
                .classed('list', true);

        list
            .text(serie.title);

        let countries = list.selectAll('.country.'+serie.attr).data(data, c => c.name);

        countries.enter()
            .append('div')
                .classed('country '+serie.attr, true)
                .attr('data-country', c => c.name);

        countries
            .style('top', c => c[serie.attr]+'px')

        let names = countries.selectAll('.name.'+serie.attr).data(c => [c.name]),
            ranks = countries.selectAll('.rank.'+serie.attr).data((c, i) => [i+1]);

        if (index == series.length-1) {
            ranks.enter()
                .append('span')
                    .classed('rank '+serie.attr, true);
        }
        names.enter()
            .append('span')
                .classed('name '+serie.attr, true);

        ranks.text(identity);
        names.text(identity);
    });

    for (var i = 0; i < series.length; i = i+2) {
        const serie1 = series[i], serie2 = series[i+1];

        var margin = {top: 9, right: 0, bottom: 0, left: 0},
            padding = {top: 0, right: 0, bottom: 0, left: 0},
            outerWidth = 300,
            outerHeight = parseInt(Array.prototype.slice.call(document.getElementsByClassName('country')).sort((a, b) => d3.descending(parseInt(a.style.top), parseInt(b.style.top)))[0].style.top)+margin.top+margin.bottom,
            innerWidth = outerWidth - margin.left - margin.right,
            innerHeight = outerHeight - margin.top - margin.bottom,
            width = innerWidth - padding.left - padding.right,
            height = innerHeight - padding.top - padding.bottom;

        var svg = d3.select("body").append("svg")
            .attr("width", outerWidth)
            .attr("height", outerHeight)
          .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var lines = svg.selectAll('line').data(data.filter(serie1.accessor).sort((a, b) => {
            return d3.ascending(serie1.accessor(a), serie1.accessor(b));
        }).map(d => {
            d.y1 = d[serie1.attr];
            d.y2 = d[serie2.attr];
            return d;
        }));

        lines.enter()
            .append('line')
                .attr('x1', 0)
                .attr('x2', innerWidth)
                .attr('data-country', c => c.name);

        lines.attr('y1', d => d.y1)
            .attr('y2', d => d.y2);
    };

    function toggleHover (toggle, country) {
        var countryName = country ? country.name : d3.select(this).attr('data-country');

        d3.selectAll('[data-country="'+countryName+'"]')
            .classed('hover', toggle);
    }

    d3.selectAll('[data-country]')
        .on('mouseenter', function () {
            toggleHover.call(this, true);
        })
        .on('mouseleave', function () {
            toggleHover.call(this, false);
        });

    function computeHash () {
        var iso = location.hash.slice(1);
        toggleHover(true, data.find(c => c.iso == iso))
    }
    window.onhashchange = computeHash;

    if (location.hash) {
        computeHash();
    }
});