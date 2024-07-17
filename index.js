//Asynchronous Functions:-
// Js is the single thredded synchronously exicuting language .The asynchronous function is a nature of JavaScript where we can break the synchronous system and we will crate the another line to exicite the piece of the code by setting up the time.

//Resources:-https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/

console.log(" I ");

console.log(" Eat ");

setTimeout(() => {
  console.log(" Ice cream ");
}, 5000); // After 5000 milliseconds(5 sec) it will exicute.

console.log(" By ");

console.log(" Spoon ");

let order = (call_production) => {
  console.log("Order has been reciveved ready for production");
  call_production();
};

let production = () => {
  console.log("the order placed you just you can start the production ");
};

order(production);

//Simple Exapmle.

let First = (next) => {
  console.log("First Step.");
  next();
};

let Second = () => {
  console.log("Second Step.");
};

First(Second);

Lets serve the ice creame (small task).

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let order = (fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[fruit_name]} was Selected`);
    call_production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log("production has started");
    setTimeout(() => {
      console.log("The fruit has been chopped");
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} are added.`);
        setTimeout(() => {
            console.log("Start the machine...");
            setTimeout(() => {
                console.log(`ice creame placed on ${stocks.holder[1]} `)
                setTimeout(() => {
                    console.log(`${stocks.toppings[1]} is the topping`);
                    setTimeout(() => {
                        console.log("The ice creame is ready");
                    },2000)
                },3000);
            },2000);
        },1000);
      },1000);
    }, 2000);
  });
};

order(0, production);

Simple Example.

let order = (production_call) => {
    setTimeout(() => {
        console.log("order placed ready for production")
        production_call();
    },2000);

};

let production = () =>{
    setTimeout(()=>{
        console.log("yeah Started")
        setTimeout(() => {
            console.log("Fruit has been selected")
        },2000);
    }, 0)
}

order(production);

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = false;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("The Shop is closed"));
    }
  });
};

order(2000, () => {
  console.log(`${stocks.Fruits[0]} was selected.`);
})
  .then(() => {
    return order(0, () => {
      console.log("The production has been started.");
    });
  })
  .then(() => {
    return order(1000, () => {
      console.log("the fruit is chopped.");
    });
  })

  .then(() => {
    return order(2000, () => {
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} are added.`);
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log("Start the machine...");
    });
  })

  .then(() => {
    return order(3000, () => {
      console.log(`ice creame placed on ${stocks.holder[1]} `);
    });
  })

  .then(() => {
    return order(3000, () => {
      console.log(`${stocks.toppings[1]} is the topping`);
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log("The ice creame is ready to serve.");
    });
  })

  .catch(() => {
    console.log("the Shop is closed so customer left.");
  })

  .finally(() => {
    console.log("have a nice day!");
  });

let is_ok = true;
let orders = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_ok) {
      setTimeout(() => {
        resolve(work())
      }, time);
    } else {
      reject(console.log("rejeced"));
    }
  });
};

orders(2000, () => {
  console.log("the order");
})

.catch(() => {
console.log("The error catched.")
})

.finally(() =>{
    console.log("The promise is finally fulfilled")
})

//await/ async

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

const time = (ms) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject("The shop is closed");
    }
  });
};

async function kitchen() {
  try {
    await time(2000)
    console.log(`${stocks.Fruits[0]} was Selected`)

    await time(0)
    console.log("the peperation started.")

    await time(1000)
    console.log("The fruit has been chopped")

    await time(1000)
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} are added.`)

    await time(1000);
    console.log("Start the machine...")

    await time(1000)
    console.log(`ice creame placed on ${stocks.holder[1]} `);

    await time(1000)
    console.log(`${stocks.toppings[1]} is the topping`);

    await time(2000)
    console.log("the ice creame is ready")
  } catch (err) {
    console.log("the error catched ", err)
  } finally {
    console.log("Have a good day")
  }
}

kitchen() 