//1 was installing node js, ts and vs code

//2

let name:string= "aatika";
console.log(`Hello ${name}, would you like to learn some python today?`)

//3

let name2:string= "Aatika";
console.log(name2.toUpperCase());
console.log(name2.toLowerCase());

//4

console.log(` Albert Einstein once said, "A person who never made a mistake never tried anything new."`)

//5
let author:string='Albert Einstein'
 let quote:string= author + ` once said, "A person who never made a mistake never tried anything new."`
console.log(quote);

//6

let name3:string = '\t aatika \n '

console.log(`without removing space: ${name3}`);
console.log(` removed space: ${name3.trim()}`);

//7 and 8
console.log(5+3);
console.log(10-2);
console.log(2*4);
console.log(16/2);

//10
let fvrt_num:number=5;
console.log(`my favorit number is ${fvrt_num}`);

//11
// my name is Syeda Aatika Abid Gellani

//12
let frndz:string[]=['aatika','hassan','hussain','salma','abid']
console.log(frndz[0]);
console.log(frndz[1]);
console.log(frndz[2]);
console.log(frndz[3]);
console.log(frndz[4]);

//13
console.log(frndz[0]+ ' how are you?');
console.log(frndz[1]+ ' how are you?');
console.log(frndz[2]+ ' how are you?');
console.log(frndz[3]+ ' how are you?');
console.log(frndz[4]+ ' how are you?');

//14
let guests:string[]=['zainab','Eman','Aoun'];
for(let i=0;i<guests.length;i++)
{
    console.log(`${guests[i]} you are invited to dinner`);

}

//15
let not_available=guests[1];
guests[1]='aatika';

console.log(`\n${not_available} couldnt make it to the dinner`)

for(let i=0;i<guests.length;i++)
{
    console.log(`${guests[i]} you are invited to dinner`);

}

//16
console.log('\nI found a bigger table');
guests.unshift('hussain');
guests.push('hassan');
guests.splice(1,0,'abid');
for(let i=0;i<guests.length;i++)
{
    console.log(`${guests[i]} you are invited to dinner`);

}

//17

console.log('\nSorry! I can only invite to persons to the dinner.\n')
let no_of_guests=guests.length;
for(let i =0;i<no_of_guests-2;i++)
{

    let not_guest=guests.pop();
    console.log(not_guest+ ' sorry I cant invite you to the dinner');
}
console.log('\n');
for(let i =0;i<guests.length;i++)
{

    console.log(guests[i]+ ' you are invited to the dinner');
}
no_of_guests=guests.length;
for(let i =0;i<no_of_guests;i++)
{
    guests.pop();

}

console.log('empty list= ',guests,'\n');


//18
let places:string[]=['Turkey','China','Iran','Saudia','America'];
console.log('original array: ',places,'\n');

let array1:string[]=places.slice().sort()
console.log('sorted array in alphabetical order',array1);
console.log('unchanged original array',places,'\n');

let array2:string[]=places.slice().sort().reverse();
console.log('sorted array in reverse alphabetical order',array2);
console.log('unchanged original array',places);

places=places.reverse();
console.log('\nreversing original array',places);
places=places.reverse();
console.log('\nreversing the reversed  original array again to bring it back to original order',places);


places=places.sort();
console.log('\nsorted original array in alphabetical order ',places)

places=places.sort().reverse();
console.log('\nsorted original array in reverse alphabetical order ',places)

//19
console.log(`\nI am inviting ${guests.length} people to dinner`);
//answer will be zero because in q 17  last part we emptied the guest array

//20
let rivers:string[]=['Ravi','Chenab','Satluj','Indus']
console.log(rivers);

//21
let book={
    tilte:"harry potter",
    author:'JK Rowlings'
}
console.log(book);

//22 Intentional error

// let river_name:string=rivers[6]
// console.log(river_name);

//23


//24



//25

let alien_color:string='green';

if(alien_color=='green')
{
    console.log('you got 5 points');

}

//26
alien_color='red'
if(alien_color == 'green')
{
    console.log('you got 5 points');

}
else{
    console.log('you got 10 points');
}
alien_color='green'
if(alien_color == 'green')
{
    console.log('you got 5 points');

}
else{
    console.log('you got 10 points');
}


//27
if(alien_color == 'green')
{
    console.log('you got 5 points');

}
else if(alien_color=='yellow'){
    console.log('you got 10 points');
}
else if(alien_color=='red'){
    console.log('you got 15 points');
}

alien_color='red'
if(alien_color == 'green')
{
    console.log('you got 5 points');

}
else if(alien_color=='yellow'){
    console.log('you got 10 points');
}
else if(alien_color=='red'){
    console.log('you got 15 points');
}

alien_color='yellow'
if(alien_color == 'green')
{
    console.log('you got 5 points');

}
else if(alien_color=='yellow'){
    console.log('you got 10 points');
}
else if(alien_color=='red'){
    console.log('you got 15 points');
}


//28
let age:number=22;
if(age<2)
{
    console.log('you are a baby')
}
else if(age>=2 && age<4)
{
    console.log('you are a toddler')
}
else if(age>=4 && age<13)
{
    console.log('you are a kid')
}
else if(age>=13 && age<20)
{
    console.log('you are a teenager')
}
else if(age>=20 && age<65)
{
    console.log('you are an adult')
}
else{
    console.log('you are an elder')
}

//29

let fvrt_fruits:string[]=['orange','apple','mango']

if(fvrt_fruits.includes('apple'))
{
    console.log('you really like apple')
}
if(fvrt_fruits.includes('banana'))
{
    console.log('you really like banana')
}
if(fvrt_fruits.includes('berry'))
{
    console.log('you really like berry')
}
if(fvrt_fruits.includes('mango'))
{
    console.log('you really like mango')
}
if(fvrt_fruits.includes('orange'))
{
    console.log('you really like orange')
}


//30

let user:string[]=['aatika','abid','admin','hassan','hussain']
for(let i=0;i<user.length;i++)
{
    if(user[i]=='admin')
    {
        console.log('hello admin, would you like to see a status report')
    }
    else{
        console.log(`hello ${user[i]}, thank you for logging in again`)
    }
}

//31
if(user.length==0){
    console.log('we need to find some users!')
}
else{
    console.log('we have users!')
}

user=[];
if(user.length==0){
    console.log('we need to find some users!')
}
else{
    console.log('we have users!')
}

//32

let current_users:string[]=['aatika','hassan','hussain'];
let new_users:string[]=['salma','aatika','abid','hassan'];
let flag=true;
for(let i=0;i<new_users.length;i++)
{
    for(let j=0;j<current_users.length;j++)
    {
        if(new_users[i]==current_users[j] || new_users[i]==current_users[j].toUpperCase() || new_users[i]==current_users[j].toLowerCase())
        {
                  flag=false;
        }
    }
    if(flag==false)
    {
        console.log(`sorry! this username (${new_users[i]}) is not avalibale`);
    }
    else{
        console.log(`this username (${new_users[i]}) is available`);
    }
       flag=true;
    }


    //33

    let ordinal_numbers:number[]=[1,2,3,4,5,6,7,8,9];

    for(let i=0;i<ordinal_numbers.length;i++)
    {
        if(ordinal_numbers[i]==1)
        {
            console.log(`${ordinal_numbers[i]}st \n`)
        }
        else if(ordinal_numbers[i]==2)
        {
            console.log(`${ordinal_numbers[i]}nd \n`)
        }
        else if(ordinal_numbers[i]==3)
        {
            console.log(`${ordinal_numbers[i]}rd \n`)
        }
        else 
        {
            console.log(`${ordinal_numbers[i]}th \n`)
        }

    }

    //34
    let pizza:string[]=['malai botti','fajita','rancher']
    for(let i=0;i<pizza.length;i++)
    {
        console.log(pizza[i],'\n')
    }

    for(let i=0;i<pizza.length;i++)
    {
        console.log(`I like ${pizza[i]} pizza.`)
    }
console.log('I love extra cheese in pizzas!\n')


//35
let animals:string[]=['cat','dog','rabbit'];
for(let i=0;i<animals.length;i++)
{
    console.log(animals[i],'\n')
}

for(let i=0;i<animals.length;i++)
{
    console.log(`A ${animals[i]} would be a great pet.`)
}
console.log('Any of these would be a great pet.\n')



//36

function make_shirt1(size:'small'|'large'|'medium',msg:string)
{
    console.log(`your shirt size is ${size} and msg on it is ${msg}`)
}
make_shirt1('small','aatika shah');


//37
function make_shirt2(size:string='large',msg:string='I love typescript')
{
    console.log(`your shirt size is ${size} and msg on it is ${msg}`)
}
make_shirt2();

make_shirt2('large','aatika shah');

make_shirt2('medium','aatika shah');
make_shirt2('medium');


//38
function describe_city(city:string,country:string='Pakistan')
{
    console.log(`${city} is in ${country}`);
}

describe_city('lahore');
describe_city('Karachi');
describe_city('muscat','Oman');

//39
function city_country(city:string,country:string)
{
    return `"${city}, ${country}"`;
}

console.log(city_country('lahore','Pakistan'))
console.log(city_country('Seol','Korea'))
console.log(city_country('Karbala','Iran'))


//40
function make_album(artist:string,title:string,track?:number):{artist_of_album:string,title_of_album:string,no_of_tracks?:number}
{
    let album;
    if(track)
    {
         album={
            artist_of_album :artist,
            title_of_album: title,
            no_of_tracks : track
        }
    }
    else{
         album={
            artist_of_album :artist,
            title_of_album: title,
        }

    }
    return album;
}

console.log(make_album('ride','Eva'));
console.log(make_album('ride','Eva',12));


//41

let magicians:string[]=['tokyo','berlin','denver'];

function show_magicians(array:string[])
{
    for(let i=0;i<array.length;i++)
    {
        console.log(array[i],'\n');
    }
}
show_magicians(magicians);

//42

function make_great(array:string[])
{
   
    for(let i=0;i<array.length;i++)
    {
        array[i]=array[i]+' the Great';
    }
    return array;
}

make_great(magicians);
show_magicians(magicians);


//43
 magicians=['tokyo','berlin','denver'];
function make_great2(array:string[])
{
    let new_array:string[]=[];
    for(let i=0;i<array.length;i++)
    {
        new_array[i]=array[i]+' the Great';
    }
    return new_array;
}
let great_magicians=make_great2(magicians);
show_magicians(great_magicians);
show_magicians(magicians);


//44
function sandwich(...ingredients:string[])
{
       console.log(`your sandwhich contains`, ingredients.join(","));
}

sandwich('patty',"cheese");
sandwich('patty','olives',"cheese");
sandwich('patty','olives',"cheese",'cucumbers');


//45
function make_car(manufacturer:string,model:string,...rest:string[]):{manufacture:string,model:string,otherFeature?:string}
{
   let car;
    if(rest)
    {
     car={
        manufacture:manufacturer,
        model:model,

        otherFeature:rest.join(",")
        }

    }
    else{
        car={
            manufacture:manufacturer,
            model:model,
           
            }

    }
    
      return car;
}


console.log(make_car('toyota','M321','black','matte'))