window.onload = function  ()
{
    const DATE = new Date();

    var HouseNumber = 425;
    var streetName = "Hospital View"
                        "Mahwelereng-A";
    var city = "Mokopane";
    var province = "Limpopo";

    "<h1>" + DATE + "</h1>";

    document.body.innerHTML = HouseNumber + 
                              " " +
                              streetName + 
                              " " +
                              city +
                              " " + 
                              province;


    console.log("contact.Us console", DATE);

    var name = "Raesetja Lizzy";
    var surname =  "Sekhu";
    var bio = "I am Software engineer with passion for creating innovative solutions"
               " to complex problems. I have background in software development, and"
               " database. I am a highly motivated individual who is always looking for"
               " new challenges and opportunities to learn and grow. ";
    var ContactInfo ="Email :lizzyraesetja2@gmail.com"
                      " Phone Number : 0727815527"
                      " Whatsapp Number : 0727815527";


    document.body.innerHTML = name + " " + surname + " " + 
                              bio +
                              " "
                              ContactInfo;


    console.log("contactInfo console", ContactInfo);
    
<form action="https://formdpree.io/lizzyraesetja2@gmail.com" 
method="POST">
    <label class="labelID"> Name(s) : </label>
    <input type="text" name="name" required></input>
    <label>Surname : </label>
    <input class="inputID" type="text" name="surname" required></input>
    <label>Email : </label>
        <input type="text" name="email" required></input>
        <label>Phone Number : </label>
        <input type="text" name="phone" required></input>
        <label>Message : </label>
        <textarea name="message" required></textarea>
        <input type="submit" value="Send"></input>
</form>
    
};
