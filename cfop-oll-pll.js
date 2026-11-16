// CubeLab CFOP dataset. Generated from cfop-oll-pll.json.
// See metadata.sources and verificationReport before integrating.
const CubeLabCFOP = {
  "schemaVersion": "1.0.0",
  "title": "CubeLab CFOP OLL/PLL algorithm dataset",
  "cube": "3x3x3",
  "notation": "WCA-style Singmaster notation; lowercase turns are wide turns; M/E/S are slice turns; x/y/z are whole-cube rotations; prime is inverse; 2 is half-turn.",
  "convention": "Yellow on U, white on D, front is F. Diagrams are not stored as guessed sticker arrays: derive the case state by applying the inverse of its algorithm to a solved cube, then render all six faces. For OLL render U plus the upper rows of F/R/B/L; for PLL render the full yellow U face plus side-colour permutation/arrows.",
  "counts": {
    "OLL": 57,
    "PLL": 21,
    "total": 78
  },
  "cases": [
    {
      "id": "oll-1",
      "set": "OLL",
      "number": 1,
      "name": "OLL 1",
      "group": null,
      "algorithm": "R U2 (R2' F R F') U2 (R' F R F')",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-2",
      "set": "OLL",
      "number": 2,
      "name": "OLL 2",
      "group": null,
      "algorithm": "L F L' (U2 R U2' R' U2) L F' L'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-3",
      "set": "OLL",
      "number": 3,
      "name": "OLL 3",
      "group": null,
      "algorithm": "r' R2 U R' U r U2' r' U M'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-4",
      "set": "OLL",
      "number": 4,
      "name": "OLL 4",
      "group": null,
      "algorithm": "l L2' U' L U' l' U2 l U' M'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-5",
      "set": "OLL",
      "number": 5,
      "name": "OLL 5",
      "group": null,
      "algorithm": "l' U2 L U L' U l",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-6",
      "set": "OLL",
      "number": 6,
      "name": "OLL 6",
      "group": null,
      "algorithm": "r U2' R' U' R U' r'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-7",
      "set": "OLL",
      "number": 7,
      "name": "OLL 7",
      "group": null,
      "algorithm": "r U R' U R U2' r'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-8",
      "set": "OLL",
      "number": 8,
      "name": "OLL 8",
      "group": null,
      "algorithm": "l' U' L U' L' U2 l",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-9",
      "set": "OLL",
      "number": 9,
      "name": "OLL 9",
      "group": null,
      "algorithm": "(R U R' U') R' F (R2 U R' U') F'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-10",
      "set": "OLL",
      "number": 10,
      "name": "OLL 10",
      "group": null,
      "algorithm": "r R2' U2' R U R' U R U R r'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-11",
      "set": "OLL",
      "number": 11,
      "name": "OLL 11",
      "group": null,
      "algorithm": "S' U2 R U R' U R U2' R' S",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-12",
      "set": "OLL",
      "number": 12,
      "name": "OLL 12",
      "group": null,
      "algorithm": "M' R' U' R U' R' U2 R U' R r'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-13",
      "set": "OLL",
      "number": 13,
      "name": "OLL 13",
      "group": null,
      "algorithm": "F (U R U' R2') F' R (U R U' R')",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-14",
      "set": "OLL",
      "number": 14,
      "name": "OLL 14",
      "group": null,
      "algorithm": "R' F R U R' F' R F U' F'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-15",
      "set": "OLL",
      "number": 15,
      "name": "OLL 15",
      "group": null,
      "algorithm": "l' U' l (L' U' L U) l' U l",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-16",
      "set": "OLL",
      "number": 16,
      "name": "OLL 16",
      "group": null,
      "algorithm": "r U r' (R U R' U') r U' r'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-17",
      "set": "OLL",
      "number": 17,
      "name": "OLL 17",
      "group": null,
      "algorithm": "F R' F' R2 r' (U R U' R') U' M'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-18",
      "set": "OLL",
      "number": 18,
      "name": "OLL 18",
      "group": null,
      "algorithm": "r U R' U R U2' r2' U' R U' R' U2' r",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-19",
      "set": "OLL",
      "number": 19,
      "name": "OLL 19",
      "group": null,
      "algorithm": "r' R U (R U R' U') M' (R' F R F')",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-20",
      "set": "OLL",
      "number": 20,
      "name": "OLL 20",
      "group": null,
      "algorithm": "(r U R' U') M2' (U R U' R') U' M'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-21",
      "set": "OLL",
      "number": 21,
      "name": "OLL 21",
      "group": null,
      "algorithm": "R U R' U R U' R' U R U2' R'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-22",
      "set": "OLL",
      "number": 22,
      "name": "OLL 22",
      "group": null,
      "algorithm": "R U2' (R2' U' R2 U' R2') U2' R",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-23",
      "set": "OLL",
      "number": 23,
      "name": "OLL 23",
      "group": null,
      "algorithm": "R2 D R' U2 R D' R' U2 R'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-24",
      "set": "OLL",
      "number": 24,
      "name": "OLL 24",
      "group": null,
      "algorithm": "(r U R' U') (r' F R F')",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-25",
      "set": "OLL",
      "number": 25,
      "name": "OLL 25",
      "group": null,
      "algorithm": "(F R' F' r) (U R U' r')",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-26",
      "set": "OLL",
      "number": 26,
      "name": "OLL 26",
      "group": null,
      "algorithm": "R U2' R' U' R U' R'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-27",
      "set": "OLL",
      "number": 27,
      "name": "OLL 27",
      "group": null,
      "algorithm": "R U R' U R U2' R'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-28",
      "set": "OLL",
      "number": 28,
      "name": "OLL 28",
      "group": null,
      "algorithm": "(r U R' U') r' R (U R U' R')",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-29",
      "set": "OLL",
      "number": 29,
      "name": "OLL 29",
      "group": null,
      "algorithm": "M U R U R' U' R' F R F' M'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-30",
      "set": "OLL",
      "number": 30,
      "name": "OLL 30",
      "group": null,
      "algorithm": "M U' L' U' L U L F' L' F M'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-31",
      "set": "OLL",
      "number": 31,
      "name": "OLL 31",
      "group": null,
      "algorithm": "R' U' F (U R U' R') F' R",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-32",
      "set": "OLL",
      "number": 32,
      "name": "OLL 32",
      "group": null,
      "algorithm": "L U F' (U' L' U L) F L'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-33",
      "set": "OLL",
      "number": 33,
      "name": "OLL 33",
      "group": null,
      "algorithm": "(R U R' U') (R' F R F')",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-34",
      "set": "OLL",
      "number": 34,
      "name": "OLL 34",
      "group": null,
      "algorithm": "f R f' U' r' U' R U M'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-35",
      "set": "OLL",
      "number": 35,
      "name": "OLL 35",
      "group": null,
      "algorithm": "R U2' (R2' F R F') R U2' R'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-36",
      "set": "OLL",
      "number": 36,
      "name": "OLL 36",
      "group": null,
      "algorithm": "L' U' L U' L' U L U (L F' L' F)",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-37",
      "set": "OLL",
      "number": 37,
      "name": "OLL 37",
      "group": null,
      "algorithm": "(F R' F' R) (U R U' R')",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-38",
      "set": "OLL",
      "number": 38,
      "name": "OLL 38",
      "group": null,
      "algorithm": "R U R' U R U' R' U' (R' F R F')",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-39",
      "set": "OLL",
      "number": 39,
      "name": "OLL 39",
      "group": null,
      "algorithm": "(f' L F L') (U' L' U L) S",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-40",
      "set": "OLL",
      "number": 40,
      "name": "OLL 40",
      "group": null,
      "algorithm": "(f R' F' R) (U R U' R') S'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-41",
      "set": "OLL",
      "number": 41,
      "name": "OLL 41",
      "group": null,
      "algorithm": "R U R' U R U2' R' F (R U R' U') F'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-42",
      "set": "OLL",
      "number": 42,
      "name": "OLL 42",
      "group": null,
      "algorithm": "(R' F R F') (R' F R F') (R U R' U') R U R'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-43",
      "set": "OLL",
      "number": 43,
      "name": "OLL 43",
      "group": null,
      "algorithm": "R' U' F' U F R",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-44",
      "set": "OLL",
      "number": 44,
      "name": "OLL 44",
      "group": null,
      "algorithm": "F (U R U' R') F'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-45",
      "set": "OLL",
      "number": 45,
      "name": "OLL 45",
      "group": null,
      "algorithm": "F (R U R' U') F'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-46",
      "set": "OLL",
      "number": 46,
      "name": "OLL 46",
      "group": null,
      "algorithm": "R' U' (R' F R F') U R",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-47",
      "set": "OLL",
      "number": 47,
      "name": "OLL 47",
      "group": null,
      "algorithm": "(F R' F' R) U2 R U' R' U R U2' R'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-48",
      "set": "OLL",
      "number": 48,
      "name": "OLL 48",
      "group": null,
      "algorithm": "F (R U R' U') (R U R' U') F'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-49",
      "set": "OLL",
      "number": 49,
      "name": "OLL 49",
      "group": null,
      "algorithm": "r U' r2' U r2 U r2' U' r",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-50",
      "set": "OLL",
      "number": 50,
      "name": "OLL 50",
      "group": null,
      "algorithm": "l' U l2 U' l2' U' l2 U l'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-51",
      "set": "OLL",
      "number": 51,
      "name": "OLL 51",
      "group": null,
      "algorithm": "F (U R U' R') (U R U' R') F'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-52",
      "set": "OLL",
      "number": 52,
      "name": "OLL 52",
      "group": null,
      "algorithm": "R' F' U' F U' R U R' U R",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-53",
      "set": "OLL",
      "number": 53,
      "name": "OLL 53",
      "group": null,
      "algorithm": "l' U' L U' L' U L U' L' U2 l",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-54",
      "set": "OLL",
      "number": 54,
      "name": "OLL 54",
      "group": null,
      "algorithm": "r U R' U R U' R' U R U2' r'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-55",
      "set": "OLL",
      "number": 55,
      "name": "OLL 55",
      "group": null,
      "algorithm": "R' F U R U' R2' F' R2 U R' U' R",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-56",
      "set": "OLL",
      "number": 56,
      "name": "OLL 56",
      "group": null,
      "algorithm": "r U r' (U R U' R') U R U' M' U' r'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "oll-57",
      "set": "OLL",
      "number": 57,
      "name": "OLL 57",
      "group": null,
      "algorithm": "(R U R' U') M' (U R U' r')",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "pll-aa",
      "set": "PLL",
      "number": null,
      "name": "Aa perm",
      "group": "Corners only",
      "algorithm": "x L2 D2 (L' U' L) D2 (L' U L')",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets_and_top_layer_piece_permutation",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "pll-ab",
      "set": "PLL",
      "number": null,
      "name": "Ab perm",
      "group": "Corners only",
      "algorithm": "x R2 D2 (R U R') D2 (R U' R)",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets_and_top_layer_piece_permutation",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "pll-e",
      "set": "PLL",
      "number": null,
      "name": "E perm",
      "group": "Corners only",
      "algorithm": "x' (L' U L D') (L' U' L D) (L' U' L D') (L' U L D)",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets_and_top_layer_piece_permutation",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "pll-ua",
      "set": "PLL",
      "number": null,
      "name": "Ua perm",
      "group": "Edges only",
      "algorithm": "R U' R U R U R U' R' U' R2",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets_and_top_layer_piece_permutation",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "pll-ub",
      "set": "PLL",
      "number": null,
      "name": "Ub perm",
      "group": "Edges only",
      "algorithm": "R2 U R U R' U' R' U' R' U R'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets_and_top_layer_piece_permutation",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "pll-h",
      "set": "PLL",
      "number": null,
      "name": "H perm",
      "group": "Edges only",
      "algorithm": "M2 U M2 U2 M2 U M2",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets_and_top_layer_piece_permutation",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "pll-z",
      "set": "PLL",
      "number": null,
      "name": "Z perm",
      "group": "Edges only",
      "algorithm": "M' U M2 U M2 U M' U2 M2",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets_and_top_layer_piece_permutation",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "pll-ga",
      "set": "PLL",
      "number": null,
      "name": "Ga perm",
      "group": "G perm",
      "algorithm": "R2 U R' U R' U' R U' R2 U' D R' U R D'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets_and_top_layer_piece_permutation",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "pll-gb",
      "set": "PLL",
      "number": null,
      "name": "Gb perm",
      "group": "G perm",
      "algorithm": "(R' U' R) (U D') R2 U R' U R U' R U' R2 D",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets_and_top_layer_piece_permutation",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "pll-gc",
      "set": "PLL",
      "number": null,
      "name": "Gc perm",
      "group": "G perm",
      "algorithm": "R2 U' R U' R U R' U R2 U D' R U' R' D",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets_and_top_layer_piece_permutation",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "pll-gd",
      "set": "PLL",
      "number": null,
      "name": "Gd perm",
      "group": "G perm",
      "algorithm": "(R U R') (U' D) R2 U' R U' R' U R' U R2 D'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets_and_top_layer_piece_permutation",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "pll-t",
      "set": "PLL",
      "number": null,
      "name": "T perm",
      "group": "Adjacent swap",
      "algorithm": "(R U R' U') R' F R2 U' R' U' (R U R') F'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets_and_top_layer_piece_permutation",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "pll-f",
      "set": "PLL",
      "number": null,
      "name": "F perm",
      "group": "Adjacent swap",
      "algorithm": "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets_and_top_layer_piece_permutation",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "pll-ja",
      "set": "PLL",
      "number": null,
      "name": "Ja perm",
      "group": "Adjacent swap",
      "algorithm": "x (R2 F R F') R U2 (r' U r) U2",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets_and_top_layer_piece_permutation",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "pll-jb",
      "set": "PLL",
      "number": null,
      "name": "Jb perm",
      "group": "Adjacent swap",
      "algorithm": "(R U R' F') (R U R' U') R' F R2 U' R'",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets_and_top_layer_piece_permutation",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "pll-ra",
      "set": "PLL",
      "number": null,
      "name": "Ra perm",
      "group": "Adjacent swap",
      "algorithm": "(R U' R' U') (R U R D) (R' U' R D') (R' U2 R')",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets_and_top_layer_piece_permutation",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "pll-rb",
      "set": "PLL",
      "number": null,
      "name": "Rb perm",
      "group": "Adjacent swap",
      "algorithm": "R2 F R (U R U' R') F' R U2 R' U2 R",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets_and_top_layer_piece_permutation",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "pll-na",
      "set": "PLL",
      "number": null,
      "name": "Na perm",
      "group": "Adjacent swap",
      "algorithm": "(R U R' U) (R U R' F' R U R' U' R' F R2 U' R') (U2 R U' R')",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets_and_top_layer_piece_permutation",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "pll-nb",
      "set": "PLL",
      "number": null,
      "name": "Nb perm",
      "group": "Adjacent swap",
      "algorithm": "r' D' F (r U' r') F' D (r2 U r' U') (r' F r F')",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets_and_top_layer_piece_permutation",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "pll-v",
      "set": "PLL",
      "number": null,
      "name": "V perm",
      "group": "Diagonal swap",
      "algorithm": "R' U R' U' y R' F' R2 U' R' U R' F R F",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets_and_top_layer_piece_permutation",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    },
    {
      "id": "pll-y",
      "set": "PLL",
      "number": null,
      "name": "Y perm",
      "group": "Diagonal swap",
      "algorithm": "F (R U' R' U') (R U R') F' (R U R' U') (R' F R F')",
      "orientation": {
        "yellow": "U",
        "front": "F",
        "right": "R",
        "back": "B",
        "left": "L"
      },
      "case_state": "inverse_of_algorithm_from_solved",
      "diagram": "generate_from_case_state_facelets_and_top_layer_piece_permutation",
      "verification": {
        "upstream_verifier": "cfop-tracker/tools/verify-algs.cjs",
        "status": "reported_pass_by_upstream_project; not independently executed in this package"
      }
    }
  ],
  "sources": [
    {
      "name": "CFOP Tracker (MIT)",
      "url": "https://github.com/linluiben/cfop-tracker",
      "used_for": "Primary algorithms, case ordering, cube-state model, and automated verification method."
    },
    {
      "name": "CFOP Tracker algs.js",
      "url": "https://raw.githubusercontent.com/linluiben/cfop-tracker/main/js/algs.js",
      "used_for": "Exact primary OLL/PLL algorithms transcribed into this dataset."
    },
    {
      "name": "CFOP Tracker cube.js",
      "url": "https://raw.githubusercontent.com/linluiben/cfop-tracker/main/js/cube.js",
      "used_for": "Reference cube-state simulation and case-state construction."
    },
    {
      "name": "CFOP Tracker verify-algs.cjs",
      "url": "https://raw.githubusercontent.com/linluiben/cfop-tracker/main/tools/verify-algs.cjs",
      "used_for": "Verification criteria and deduplication check."
    },
    {
      "name": "CubeDojang CFOP cheat sheets",
      "url": "https://cubedojang.com/cheat-sheets/practice/",
      "used_for": "Independent reference for 57/21 case coverage and diagram convention: OLL top plus side stickers; PLL side colours and arrows."
    }
  ],
  "verificationReport": {
    "sourceProjectClaims": "The upstream CFOP Tracker README states that npm run verify checks all 78 primary cases and alternates by applying inverse algorithms to solved state, applying each algorithm, and checking OLL orientation/F2L or complete PLL solve; it also checks duplicate case signatures.",
    "independentExecution": "Not run in this environment. The algorithms are imported from the upstream MIT project; this package does not claim an independent successful test run.",
    "knownLimitations": [
      "Case diagrams must be generated by the CubeLab cube simulator; this data file intentionally does not embed hand-authored or guessed sticker maps.",
      "Orientation convention must be kept consistent with the renderer. Whole-cube rotations x/y/z and slice moves M/E/S must be implemented correctly.",
      "The upstream verifier's reported pass is not a substitute for running its test suite in CubeLab before release."
    ]
  }
};
if (typeof module !== 'undefined') module.exports = CubeLabCFOP;
