var w = $(window).width(),
    h = $(window).height(),
    totalSection = 3,
    actualSection = 1,
    path1,
    path2,
    section1,
    section2,
    section3;

function sections() {
    w = $(window).width();
    h = $(window).height();

    section1 = {
        path1: [{
                x: 0,
                y: 0
            },
            {
                x: w * 0.2,
                y: 0
            },
            {
                x: w * 0.7,
                y: h
            },
            {
                x: 0,
                y: h
            }
        ],
        path2: [{
                x: -w * 0.2,
                y: h * 0.2
            },
            {
                x: 0,
                y: 0
            },
            {
                x: w,
                y: h
            },
            {
                x: 0,
                y: h
            }
        ]
    }

    section2 = {
        path1: [{
                x: w * 0.15,
                y: 0
            },
            {
                x: w,
                y: 0
            },
            {
                x: w,
                y: h
            },
            {
                x: w * 0.65,
                y: h
            }
        ],
        path2: [{
                x: w,
                y: h * 0.3
            },
            {
                x: w * 2,
                y: h * 0.3
            },
            {
                x: w,
                y: h
            },
            {
                x: w * 0.45,
                y: h
            }
        ]
    }

    section3 = {
        path1: [{
                x: w * 0.1,
                y: 0
            },
            {
                x: w,
                y: 0
            },
            {
                x: w * 1.1,
                y: h * 0.7
            },
            {
                x: w,
                y: h * 0.95
            }
        ],
        path2: [{
                x: w * 0.18,
                y: 0
            },
            {
                x: w,
                y: 0
            },
            {
                x: w * 0.95,
                y: h
            },
            {
                x: w * 0.55,
                y: h
            }
        ]
    }
}

$('button').click(function () {
    actualSection = (actualSection >= totalSection) ? 1 : ++actualSection;
    $('#pieces').removeAttr('class').addClass('section' + actualSection);
    morphingPaths(actualSection);
});

// window resize
$(window).on('resize', function () {
    morphingPaths(actualSection);
}).resize();

// Morphing Paths
function morphingPaths(section) {
    sections();
    var $path1 = $('#path1'),
        $path2 = $('#path2');

    switchToPath($path1, section, 'path1');
    setTimeout(function () {
        switchToPath($path2, section, 'path2');
    }, 200);
}

function switchToPath($path, section, sectionPath) {
    var pathPoints = eval('section' + section)[sectionPath];
    var points = '';

    window[sectionPath] = []; // reset var path1/path2
    actualPoints = $path.attr('points').split(' '); // punti corretti dell'svg


    // creo un oggetto path1 / path2 che abbia i punti iniziali e finali
    for (var i = 0; i < pathPoints.length; i++) {
        actualPoint = actualPoints[i].split(',');

        obj = {
            x: actualPoint[0],
            endX: pathPoints[i].x,
            y: actualPoint[1],
            endY: pathPoints[i].y
        }

        // path1 / path2
        window[sectionPath].push(obj);
    }

    // animo con GSAP
    for (var i = 0; i < window[sectionPath].length; i++) {
        p = window[sectionPath][i];

        console.log(p.x);

        TweenMax.to(p, 1, {
            x: p.endX,
            y: p.endY,
            ease: Expo.easeInOut,
            delay: i * .25,
            onUpdate: function () {
                animatePath($path, window[sectionPath]);
            }
        }, .2);
    }

    function animatePath($path, path) {
        var points = '';
        for (var i = 0; i < path.length; i++) {
            var point = path[i].x + ',' + path[i].y;
            points += point + ' ';
        }
        $path.attr('points', points);
    }
}