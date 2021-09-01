const bmi_calc = () => {
    const w_num = document.getElementById('wnum').value;
    // console.log(w_num);
    const wunit = document.getElementById('wselect');
    const ValueWUnit = wselect.options[wunit.selectedIndex].value;
    // console.log( ValueWUnit); 
    const h_num = document.getElementById('hnum').value;
    // console.log(h_num);
    const hunit = document.getElementById('hselect');
    const ValueHUnit = hselect.options[hunit.selectedIndex].value;
    // console.log( ValueHUnit);

    const lbstokg = (lbs) => {
        let killo = (lbs * 0.453592);
        return killo;
    }
    const feettom = (feet) => {
        let meter = (feet * 30.48) / 100;
        return meter;
    }

    let final_weight;
    if (ValueWUnit == 'lbs')
        final_weight = lbstokg(w_num);
    else {
        final_weight = w_num;
    }

    let final_height;
    if (ValueHUnit == 'feet')
        final_height = feettom(h_num);
    else {
        final_height = (h_num) / 100;
    }
    const result = Math.round(final_weight / (final_height * final_height));
    // console.log(result); 
    let status;
    if (result < 18.5)
        status = 'UNDERWEIGHT';

    else if (result < 24.9)
        status = 'NORMAL';
    else
        status = 'OVERWEIGHT';



    console.log(result);
    document.getElementById('result_text').innerHTML = `BMI: ${result}`;
    document.getElementById('status').innerHTML = `You are ${status}`;
}


const resetData = document.getElementById('reset');
resetData.addEventListener('click', () => {
    document.getElementById('result_text').innerHTML = "";
    document.getElementById('status').innerHTML = "";
})


