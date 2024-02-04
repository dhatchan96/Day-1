/* 1. Write a blog on Difference between HTTP1.1 vs HTTP2
=> In a nutshell, the shift from HTTP/1.1 to HTTP/2 brings crucial improvements to web communication:

        Multiplexing: HTTP/2 enables concurrent data transfer, reducing latency by allowing multiple requests to be processed simultaneously over a single connection.

        Header Compression: Unlike HTTP/1.1, HTTP/2 uses compressed headers, minimizing data transfer overhead and accelerating load times.

        Binary Protocol: HTTP/2 adopts a binary format for more efficient parsing, reducing errors during transmission and enhancing data compression.

        Server Push: This feature allows servers to proactively send resources to clients, optimizing load times by anticipating and fulfilling potential requests.

        Prioritization: HTTP/2 introduces advanced prioritization, enabling clients to specify the importance of resources for faster and more efficient processing.

        The transition to HTTP/2 signifies a quantum leap in web performance, offering a more streamlined, faster, and efficient browsing experience. */


/*  2. Write a blog about objects and its internal representation in Javascript


=>  Introduction:
    JavaScript objects are like treasure chests holding valuable information. Let's take a peek inside without diving too deep into technical jargon. In this blog, we'll explore how objects work in plain and simple terms.

    Objects in JavaScript:
    Think of objects as containers. You have a box, and inside it, you put things with labels. In JavaScript, an object is created with curly braces {}. Here's a quick example:
    
    For example :
    let person = {
    name: "John Doe",
    age: 25,
    profession: "Developer"
    };
    person is our box, and inside, we've labeled three things: name, age, and profession.

    What's Inside the Box - Properties:
    Properties are like the labeled things inside our box. They can be names, ages, or professions. Each property can hold a specific piece of information.

    For example :
    console.log(person.name); // Outputs: John Doe
    This is how we retrieve something from our box.

    Changing Stuff Inside the Box:
    Now, what if we want to change or add something? JavaScript makes it easy:

    For example :
    person.age = 26; // We just updated the age!
    person.city = "Techland"; // We added a new thing!
    We simply assign a new value or add a new label, and our box is updated.

    Conclusion:
    JavaScript objects are like everyday containers that make organizing information a breeze. You have a box, put labeled things inside, and can easily change or add more stuff. Understanding this simple concept helps you wield the power of objects in your web development journey. So, go ahead, create your boxes, label your things, and let the simplicity of JavaScript objects enhance your coding adventures! */