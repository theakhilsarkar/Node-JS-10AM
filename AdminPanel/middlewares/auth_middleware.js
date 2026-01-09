
// validate all fields 
export const validateSignupFields = (req, res, next) => {
    const { email, password, role, name } = req.body;
    if (email && password && role && name) {
        next();
    }
    else {
        res.status(400).json({ status: false, message: "all fields are required !" });
    }
}
export const validateSigninFields = (req, res, next) => {
    const { email, password } = req.body;
    // email - regx
    if (email && password) {
        next();
    } else {
        res.status(400).json({ status: false, message: "all fields are required !" })
    }
}

export const validateOtpFields = (req, res, next) => {
    const { email, otp } = req.body;
    if (email && otp) {
        next();
    }
    else {
        res.json({ status: false, message: "Please enter otp !" });
    }
}