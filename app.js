var answers = ["I skipped that chapter in school",
"I bet your gurdian angel drinks because of you",
"Let's discuss further over shwarmas", "I'll get back to you on that one", "That sounds like a question an alien would ask", "Definitely", "You wish", "Not on this planet", "Did you even try asking your grandmother?", "Alright I confess, I lied on my resume", "These types of questions are why you have no friends", "I don't know", "Have you tried consulting a witch?", "Look, I failed magic school, ok", "Sure, whatever", "I'm thinking of a number, what is it? See, it's not so easy", "Que sera sera", "Maybe", "There's a 50/50 chance",
"Oh come on, I just laid down", "I met a guy once, he knew stuff, I'll give you his number", "For better results, try rubbing me next time", "You're my first, please spread the word", "Who told you about my powers?", "See this is why I dropped out of genie school", "This is too much pressure", "Be careful what you ask, I know everything", "Maybe its because you're an alien", "Ask your ancestors", "I've often wondered the same thing", "Oh yes oh yes, I know this one but I just can't remember", "Oh come on, I'm on a tea break", "Do I look like a crystal ball to you?", "My mom said I shouldn't talk to strangers", "Your questions made my shrink rich"];


document.querySelector("question");
document.querySelector('answer');

function ask() {
    var randomResponse = (Math.floor(Math.random() * answers.length));
    if(question.value === "") {
        asker.innerHTML = "Are you sure you have no questions?";
        answer.innerHTML = "I am a fountain of wisdom, drink from me.";
    } else {
        asker.innerHTML = "You asked: " + "<br>" + question.value;
        answer.innerHTML = (answers[randomResponse]); 
    }
}