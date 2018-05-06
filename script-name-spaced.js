
const myApp = {};

myApp.destinations = [
    {
        name: 'brickworks',
        features: ['pond', 'coffee', 'family']
    },

    {
        name: 'HanlansPoint',
        features: ['beach', 'freakFlag', 'byob']
    },
    {
        name: 'bellwoods',
        features: ['swimmingPool', 'beer', 'coffee', 'hipsters']
    }
];

myApp.takeQuiz = function () {
    $('.takeQuiz').on('click', function () {
        $('#header').hide();
        $('#questions').fadeIn();
    });
}

myApp.init = function () {
    $('#questions').hide();
    $('#results').hide();

    myApp.takeQuiz ()
}

$(function () {myApp.init(


)};