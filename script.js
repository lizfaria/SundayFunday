// create an array on destinations with a name property that will show in the results at the end, and a features property 
const destinations = [
    {
        name: 'the Brickworks <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.3174669069977!2d-79.36862068568914!3d43.68316297912026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cca5aaf70027%3A0x5d82f1b6b4974496!2sBrickworks+at+Don+Valley!5e0!3m2!1sen!2sca!4v1525569192644" width="100%" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>',
        features: ['pond', 'coffee', 'family']
    },

    {
        name: 'Hanlan\'s Point beach <iframe src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.281744330049!2d-79.39783998569239!3d43.621494579122455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3540b1efeb1b%3A0x6c5ebb9c1f8d4f0a!2sHanlan&#39;s+Point+Beach!5e0!3m2!1sen!2sca!4v1525568914052" width = "100%" height = "250" frameborder = "0" style = "border:0" allowfullscreen ></iframe>',
        features: ['beach','freakFlag', 'byob']
    },
    {
        name: 'Trinity Bellwoods park <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11548.34664900272!2d-79.41462123037292!3d43.6463652659413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34fb59eedcdb%3A0x3fb22c8aefb75bb!2sTrinity+Bellwoods+Park!5e0!3m2!1sen!2sca!4v1525569126838" width="100%" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>',
        features: ['swimmingPool', 'beer', 'coffee', 'hipsters']
    }
];


// open a function 
$(function () { 
    // when page loads, immediately hide the questions and results. when you click the input with the name of take quiz, show the questions section 
    $('#questions').hide();
    $('.copyright--logo').hide(); 
    $('#results').hide();

    $('.takeQuiz').on('click', function () {
        $('#header').hide();
        $(`.copyright--logo`).hide();
        $('#questions').fadeIn();
    });

    // in the form section, on the even of submit, prevent default and create 3 variables to save the value of each radio section - name, water, drink 
    $('form').on('submit', function (e) {
    e.preventDefault();
    const waterType = $(`input[name=water]:checked`).val();
    const drinkType = $(`input[name=drink]:checked`).val();
    const crowdType = $(`input[name=crowd]:checked`).val();

    // create an array called final choice that will store the features in the destinations array that the user's click event corresponds with 
    const finalChoice = [];

    // create a variable for each choice - called choice1, choice2, choice3 - that is equal to the destinations array and will filter that variable that we used to save the input choice we made - then push that variable to the finalChoice variable
    const choice1 = destinations
        .filter((destination) => {
            return destination.features.includes(waterType);
        });
    finalChoice.push(choice1);

    const choice2 = destinations
        .filter((destination) => {
            return destination.features.includes(drinkType);
        });
    finalChoice.push(choice2);

    const choice3 = destinations
        .filter((destination) => {
            return destination.features.includes(crowdType);
        });
    finalChoice.push(choice3);

    // flatten the objects in the final choice array 
    const flat = finalChoice.reduce((total, amount) => {
        return total.concat(amount);
    });

    // loop through flat array to count occurences of object using countBy underscore 
    const count = _.countBy(flat, function(obj) {
        return obj.name.replace("","")
    });

    // create a new variable called funday Destination with a function .max which will return a Number, representing the highest number of the arguments in the  count array
    const fundayDestination = _.max(Object.keys(count), function(ss) {
        return count[ss];
    });

    // add the function answer in an h2 tag to the results sections 
    $('.results').html(`<h1 class="choice">Check out ${fundayDestination}</h1>`);
    });

    // when you click the submit button, hide the questions and show the results section
    $('.submit-button').on('click', function () {
    $('#questions').hide();
    $('#results').fadeIn();
    $(`.copyright--logo`).fadeIn();
    });

});
