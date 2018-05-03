
    const destinations = [
        {
            name: 'brickworks',
            features: ['pond', 'coffee', 'family']
        },

        {
            name: 'HanlansPoint',
            features: ['beach','freakFlag', 'byob']
        },
        {
            name: 'bellwoods',
            features: ['swimmingPool', 'beer', 'coffee', 'hipsters']
        }
    ];

    // console.log(destinations);

    $(function () { 
    $('form').on('submit', function (e) {
        e.preventDefault();
        const waterType = $(`input[name=water]:checked`).val();
        const drinkType = $(`input[name=drink]:checked`).val();
        const crowdType = $(`input[name=crowd]:checked`).val();

        const finalChoice = [];

        const choice1 = destinations
            .filter((destination) => {
                console.log(destination)
                return destination.features.includes(waterType);
                
            });
        finalChoice.push(choice1);

        const choice2 = destinations
            .filter((destination) => {
                console.log(destination)
                return destination.features.includes(drinkType);
            });
        finalChoice.push(choice2);

        const choice3 = destinations
            .filter((destination) => {
                console.log(destination)
                return destination.features.includes(crowdType);
                
            });

        finalChoice.push(choice3);

        console.log(finalChoice);

        const flat = finalChoice.reduce((total, amount) => {
            return total.concat(amount);
        });

        console.log(flat)

        // loop through flat array and count occurences of object 

        const count = _.countBy(flat, function(obj) {
            return obj.name.replace("","")
        });

        const fundayDestination = _.max(Object.keys(count), function(ss) {
            return count[ss];
        });
   
        $('.results').html(`<h2 class="choice">${fundayDestination}</h2>`);

    });

});


    
        

        // let counter = function () {

        //     for (let counter = 1; counter <= 100; counter++) {
        //         if (flip() === 0) {
        //             heads++;
        //         }
        //         else {
        //             tails++;
        //         }
        //     }

        //     document.write(`heads: ${heads}, tails: ${tails}`)
        // } 

    
        


//         _.groupBy([1.3, 2.1, 2.4], function (num) { return Math.floor(num); });
// => { 1: [1.3], 2: [2.1, 2.4] }

//         _.groupBy(['one', 'two', 'three'], 'length');
// => { 3: ["one", "two"], 5: ["three"] }

        // console.log(final)



        // if index item in array of finalChoice is the same as another index item
        // push duplicate string onto new array
        // for (var i = 0; i < finalChoice.length - 1; i++) {
        //     if (finalChoice[i + 1] == finalChoice[i]) {
        //         lastChoice.push(finalChoice);
        //     }
        // }

        // console.log(lastChoice);

            // $('.results').html(`<h2 class="choice">${}</h2>`);

      



        //     .filter((destination) => {
        //     console.log(destination)
        //     return destination.features.includes(drinkType, crowdType);
        // });
        // .filter((destination) => {
        //     console.log(destination)
        //     return destination.features.includes(waterType, drinkType, crowdType);
        // });
        // return destination.features.includes(waterType, drinkType, crowdType);

                // return destination.features.includes(drinkType);
                // return destination.features.includes(crowdType);
                

        
       

        



// const finalResult = getRandomItemFromdArray(finalOptions);
// });

// const ofAge = users
//     .filter((user) => {
//         return user.age >= 19;
//     })



    //     for (i = 0; i < choice.length; i++) {
    //             console.log(choice[i])
    //             const storedChoice = choice[i];
    //             if (storedChoice.bodyOfWater === bodyOfWater) {
    //                 finalOptions.push(storedChoice);
    //             }
    //             console.log(finalOptions);
    //         }

   




    //         

//             const finalResult = getRandomItemFromdArray(finalOptions);
//             console.log(finalResult);

//             $('.results').html(`<h2 class="choice">${finalResult.title}</h2>`);
