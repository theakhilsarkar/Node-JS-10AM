// import bcrypt from 'bcrypt'

// const password = "Admin@1234";
// // .has, .compare

// // const hashedPassword = await bcrypt.hash(password, 10);
// // console.log(hashedPassword)
// const res = await bcrypt.compare(password, "$2b$10$miew3A7f1WFEykvjCheQR.13nfMdNC0x7IM7aavVepPkLf4qXCBT6");
// console.log(res);


// // signin and signup api, using cookies & bcrypt.

// // auth(cookies + bcrypt) + image + mongodb
// // blog project.


// javascript

// 1 2 3 4 5
// 3 4 5 1 2

const arr = [1, 2, 3, 4, 5, 6, 7]; //  4 5 1 2
const k = 3;

var rotate = function(nums, k) {
    let n = nums.length;
    k = k % n;
    if (k === 0) return;
    
    let temp = nums.slice(-k);
    for (let i = n - k - 1; i >= 0; i--) {
        nums[i + k] = nums[i];
    }
    for (let i = 0; i < k; i++) {
        nums[i] = temp[i];
    }
};


var rotate = function(nums, k) {
    for (let i = 1; i <= k; i++) {
    const last = nums.pop();
    nums.unshift(last);
    }
};
















