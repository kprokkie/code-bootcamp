// Frequency Counter Pattern

var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let sHash = {};
    let tHash = {};

    // TC: O(n)
    for (let i = 0; i < s.length; i++) {
        sHash[s[i]] = ++sHash[s[i]] || 1;
        tHash[t[i]] = ++tHash[t[i]] || 1;
    }

    // TC: O(m)
    for (let key in sHash) {
        if (sHash[key] !== tHash[key])
            return false;
    }

    return true;
}

let s = "anagram";
let t = "nagaram";

console.log(isAnagram(s, t));

// can be more optized in term of space complexity
