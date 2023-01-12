const yourname = 'Maikon';

const currentDate = new Date();
const year = currentDate.getFullYear();

const currentHour = new Date();
const hour = currentHour.getHours();

const img = "https://picsum.photos/200";

let greeting = ""

const customStyle = {
    color: "",
    textAlign: "Center",
    padding: "2%"
};

if (hour < 12) {
    greeting = "Good Morning";
    customStyle.color = "red"
} else if (hour < 18) {
    greeting = "Good Afternoon"
    customStyle.color = "green"
} else {
    greeting = "Good Night"
    customStyle.color = "blue"
};

export {yourname, year, img, greeting, customStyle};