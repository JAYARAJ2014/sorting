### Plain type script application

the type script code is persisted in /src folder

the compiled output JS files will be generated in /build .

To achieve this run `tsc --init` that creates a `tsconfig.json ` uncomment rootDir and outDir and update the values as shown below

```

"rootDir": "./src",
"outDir": "./build",

```

Install `nodemon` and `concurrently` for compilation and run without stopping and restarting. Configure package.json for npm build and npm run as shown below.

```
 "scripts": {
    "start:build":"tsc -w",
    "start:run" : "nodemon build/index.js",
    "start":"concurrently npm:start:*"
  },

```

```
Here is a quick dry run of Bubble Sort Algorithm. In a nutshell it compares pairs of elements and swaps them if the lhs > rhs. (In a nested for loop). This is not an efficient algorithm
/**


- bubble sort process
-
- if array length <2 exit
- if element on left > element on right then swap
-
- [76, 43, 12, 32,18, 7, 91,27];
- arr[0]>arr[1] ? yes, swap
- [43,76, 12, 32,18, 7, 91,27];
- arr[1]>arr[2]? no so continue
- [43,76, 12, 32,18, 7, 91,27];
- arr[2]>arr[3] no so continue
- [43,76, 12, 32,18, 7, 91,27];
- arr[3]>arr[4] ? yes, swap
- [43,76, 12, 18,32, 7, 91,27];
- arr[4] > arr[5] ? yes ,swap
- [43,76, 12, 18,7,32, 91,27];
- arr[5] > arr[6] ? no, continue
- [43,76,12,18,7,32,91,27];
- arr[6] > arr[7] ? yes, swap
- [43,76,12,18,7,32,27,91];
-
- At the end of this first iteration the greatest element is to the far right.
- We exclude this element in the next iteration
-
- [43,76,12,18,7,32,27,91];
- arr[0] > arr[1] ? no , continue
- [43,76,12,18,7,32,27,91];
- arr[1] > arr[2] ? yes, swap
- [43,12,76,18,7,32,27,91];
- arr[2] > arr[3] ? yes, swap
- [43,12,18,76,7,32,27,91];
- arr[3]>arr[4] ? yes, swap
- [43,12,18,7,76,32,27,91];
- arr[4]>arr[5] ? yes, swap
- [43,12,18,7,32, 76,27,91];
- arr[5] > arr[6]? yes, swap
- [43,12,18,7,32,27, 76,91];
-
- next iteration
- [43,12,18,7,32,27, 76,91];
- [12,43,18,7,32,27, 76,91];
- [12,18,43,7,32,27, 76,91];
- [12,18,7,43,32,27, 76,91];
- [12,18,7,32,43,27, 76,91];
- [12,18,7,32,27,43, 76,91];
-
- next
- [12,18,7,32,27,43, 76,91];
- [12,7,18,32,27,43, 76,91];
- [12,7,18,32,27,43, 76,91];
- [12,7,18,27,32,43, 76,91];
- [12,7,18,27,32,43, 76,91];
- [12,7,18,27,32,43, 76,91];
-
- [12,7,18,27,32, 43,76,91];
- [7,12,18,27,32, 43,76,91];
- [7,12,18,27,32, 43,76,91];
- [7,12,18,27,32, 43,76,91];
- [7,12,18,27,32, 43,76,91];
-
- */
```

Look at the NumebrsCollection, CharacterCollection and LinkedList classes for how sorting is implemented. We could make use of an interface Sortable and create a Sorter class that implements the actual sorting logic if the concrete classes can provide swap and compare methods. The itnerface Sortable helps with that. This is a very losely coupled approach.

We then refactored the application to use Abstract classes (Making the interface needless) . In this fashion the collections themselves exposes sorting algorithm without duplicating code. However, this tightly couples the classes.
