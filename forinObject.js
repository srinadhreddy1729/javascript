data=function()
{
    const ii={
        "car":897,
        "bus":67,
        "lorry":34,
        "tractor":23,
        "crane":45
    }
    for(let val in ii)
    {
    console.log(val +":"+ii[val]);
    }
}
data()