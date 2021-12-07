var day = {
    breakfast: 'Eba with Egusi',
    afternoon: 'Turkey with indomie'
};

var night = {
    dinner: 'vegetables'
}

var reservation = {... day, ... night}
console.log(reservation);