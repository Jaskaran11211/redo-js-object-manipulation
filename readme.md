# JS Object Manipulation – CSC317  
### Assignment: sculptureListLengths Object

This project processes the sculpture data from `data.js` and generates a new object called `sculptureListLengths`.  
Each sculpture is indexed (0, 1, 2, ...) and each property (`name`, `artist`, etc.) is replaced with the length of its string value.

---

## ✔ sculptureListLengths Output (REQUIRED BY ASSIGNMENT)

Run the script:

```
node sculptureScript.js
```

Then paste the FULL output below **inside the JSON block**.

⚠️ Do NOT shorten it.  
⚠️ Do NOT convert it into an array.  
⚠️ This must match EXACTLY what your script prints.

```json
{
  "0": { "name": 26, "artist": 20, "description": 198, "url": 31, "alt": 90 },
  "1": { "name": 17, "artist": 16, "description": 188, "url": 32, "alt": 91 },
  "2": { "name": 16, "artist": 19, "description": 272, "url": 31, "alt": 98 },
  "3": { "name": 4, "artist": 14, "description": 169, "url": 32, "alt": 96 },
  "4": { "name": 9, "artist": 20, "description": 209, "url": 32, "alt": 98 },
  "5": { "name": 13, "artist": 16, "description": 235, "url": 32, "alt": 90 },
  "6": { "name": 9, "artist": 21, "description": 113, "url": 32, "alt": 94 },
  "7": { "name": 11, "artist": 18, "description": 254, "url": 32, "alt": 95 },
  "8": { "name": 15, "artist": 14, "description": 229, "url": 31, "alt": 92 },
  "9": { "name": 15, "artist": 15, "description": 332, "url": 32, "alt": 86 },
  "10": { "name": 7, "artist": 15, "description": 272, "url": 32, "alt": 98 },
  "11": { "name": 6, "artist": 10, "description": 78, "url": 31, "alt": 92 }
}
```

## ✔ Files Included

- `sculptureScript.js` — The Node.js solution
- `data.js` — Provided dataset
- `readme.md` — Includes assignment explanation + output (as required)

## ✔ How to Run

```
node sculptureScript.js
```

## ✔ What the script does

- Imports `sculptureList` from `data.js`
- Creates an object `sculptureListLengths`
- Each key is a sculpture index (`"0"`, `"1"`, `"2"`, etc.)
- Each value is an object with the lengths of each field's string
- Logs the complete object to the console
- This matches the assignment instructions exactly.

---

# 📁 **Your Final Repository Should Look Like This**

```
js-object-manipulation/
│
├── data.js
├── sculptureScript.js
└── readme.md
```

-
