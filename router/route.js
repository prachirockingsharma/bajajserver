const express = require('express')
const router = express.Router()

router.post("/bfhl/", (req, res) => {
    const { data } = req.body
    if (!data) {
        return res.status(400).json({
            is_success: false,
            message: "data is missing"
        })
    }
    const numbers = []
    const alphabets = []
    for (let x of data) {
        if (!isNaN(x)) {
            numbers.push(x);
        }
        else if ((x >= 'a' && x <= 'z') || (x >= 'A' && x <= 'Z')) {
            alphabets.push(x);
        }
    }

    const highestAlphabet = alphabets.length > 0 ? [alphabets.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()))[0]] : [];


    const response = {
        is_success: true,
        "user_id": "rohan_gupta_19072003",
        "email": "rs6350@srmist.edu.in",
        "roll_number": "RA2111043010033",
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_alphabet": highestAlphabet

    }

    return res.status(200).json(response);
})

router.get("/bfhl/", (req, res) => {
    const response = {
        "operation_code": 1
    }
    return res.status(200).json(response)
})

module.exports = router;