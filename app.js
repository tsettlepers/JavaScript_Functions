console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("\nEXERCISE 1:\n==========\n");
function printOdds(count) {
    console.log("Odd Numbers to " + count);
    if (count >0) {
        for (let i=1; i<=count; i++) {
            if (i%2 == 1) {
                console.log(i + " is odd.");
            }
        }
    }
    else {
        console.log("Negative counts not supported.");
    }
}

printOdds(14);
printOdds(-20);


// Exercise 2 Section
console.log("\nEXERCISE 2:\n==========\n");
function checkAge(userName, age) {
    let addressee;
    if (userName==undefined) {
        addressee = "Stranger"
    }
    else {
        addressee = userName
    }
    const aboveSixteen = `Congrats ${addressee}, you can drive!`;
    const belowSixteen = `Sorry ${addressee}, but you need to wait until you're 16.`;
    const unknownSixteen = `Sorry ${addressee}, without supplying an age we must assume you're under 16.`;
    if (age==undefined) {
        console.log(unknownSixteen);
    }
    else if (age>=16) {
        console.log(aboveSixteen);
    }
    else {
        console.log(belowSixteen);
    }
}

checkAge("tom",21);
checkAge("Kim",15);
checkAge();

// Exercise 3 Section
console.log("\nEXERCISE 3:\n==========\n");
function quadrant(x,y) {
    let msg;
    if (x==undefined || y==undefined) {
        msg = "Cannot determine the location w/o both x and y.";
    } else if (x==0 && y==0) {
        msg = `${x},${y} lies on the origin.`
    } else if (x==0) {
        msg = `${x},${y} lies on the Y-axis.`
    } else if (y==0) {
        msg = `${x},${y} lies on the X-axis.`
    } else if (x>0 && y>0) {
        msg = `${x},${y} lies in Quadrant 1.`
    } else if (x<0 && y>0) {
        msg = `${x},${y} lies in Quadrant 2.`
    } else if (x<0 && y<0) {
        msg = `${x},${y} lies in Quadrant 3.`
    } else {
        msg `${x},${y} lies in Quadrant 4.`
    }
    console.log(msg);
}

quadrant(0,2);
quadrant(1,2);
quadrant(-6,18);

// Exercise 4 Section
console.log("\nEXERCISE 4:\n==========\n");
function evalTriangle(s1,s2,s3) {
    let msg;
    if (s1==undefined || s2==undefined || s3==undefined) {
        msg = "You must supply all three sides."
    } else if (s1>s2+s3 || s2>s1+s3 || s3>s1+s2) {
        msg = `(${s1},${s2},${s3}) are not valid sides of a triangle.`;
    } else if (s1==s2 && s2==s3) {
        msg = `(${s1},${s2},${s3}) form an equilateral triangle.`;
    } else if (s1==s2 || s1==s3 || s2==s3) {
        msg = `(${s1},${s2},${s3}) form an isosceles triangle.`;
    } else {
        msg = `(${s1},${s2},${s3}) form a scalene triangle.`;
    }
    console.log(msg);
}

evalTriangle(3,4,5);
evalTriangle(6,6,6);
evalTriangle(9,1,9);

// Exercise 5
console.log("\nEXERCISE 5:\n==========\n");
function evalMobile(planLimit,day,usage) {
    let msg;
    if (planLimit==undefined || day==undefined || usage==undefined) {
        msg = "You must supply all three parameters.";
    } else {
        let dailyAvailable = planLimit/30;
        let dailyUsed = usage/day;
        let planRemaining = planLimit - usage;
        let daysRemaining = 30-day;
        msg = `---Plan evaluation for (${planLimit},${day},${usage})---\n`;
        msg = msg + `${day} days used, ${30-day} days remaining.\n`;
        msg = msg + `Average available data: ${dailyAvailable.toFixed(2)} GB/day.\n`;
        if (Math.abs(dailyAvailable-dailyUsed) < 0.1) {
            msg = msg + `Your usage (${dailyUsed.toFixed(2)} GB/day) is very close to plan.\n`;
        } else if (dailyUsed > dailyAvailable) {
            msg = msg + `Your usage (${dailyUsed.toFixed(2)} GB/day) suggests that you will exceed your plan by ${(dailyUsed*30-planLimit).toFixed(2)} GB for this billing period.\n`;
        } else {
            msg = msg + `Your usage (${dailyUsed.toFixed(2)} GB/day) is running well within your plan limits.\n`;
        }
        if (planRemaining < 0) {
            msg = msg + `You have already exceeded your plan for the period by ${0-planRemaining} GB.\n`;
        } else {
            msg = msg + `To stay below your data plan, use no more than ${(planRemaining/daysRemaining).toFixed(2)} GB/day for the rest of this billing period.\n`;
        }
    }
    console.log(msg);
}

evalMobile(100,15,56);
evalMobile(50,20,55);
evalMobile(30,29,15);