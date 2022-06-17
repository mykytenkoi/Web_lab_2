String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

let data = [
    { 
        "title" : "Broken windows theory",
        "image" : "../example_img/ideas_title_3.jpg",
        "short" : `In 1982, James Wilson and George Kelling formulated a theory according to which if someone broke the glass in a house and no one inserted a new one, then soon not a single whole window would remain in that hous...
        `,
        "full_text" : `<p class="lead">In 1982, James Wilson and George Kelling formulated a theory according to
        which if someone broke the glass in a house and no one inserted a new one, then soon not a
        single whole window would remain in that house, and then looting would begin. In other
        words, clear signs of disorder and non-compliance by people with accepted norms of behavior
        provoke others to forget about the rules too. As a result of the resulting chain reaction, a
        "decent" urban area can quickly turn into a cloaca, where people are afraid to go out.</p>
        <p class="lead">Sociologists at the University of Groningen (Netherlands) conducted six
        experiments to test the truth of the theory of broken windows.</p>
        <h2 class="card-title display-5">Experiment 1</h2>
        <p class="lead">The first experiment was carried out on a street with many shops, near the wall
        of a house, where Groningen people who come to shop park their bicycles. There was a bright,
        conspicuous sign against this wall, prohibiting painting on the walls. At first, the wall
        was clean. The experimenters hung a piece of paper on the handlebars of each bicycle (there
        were 77 bicycles in total) with the words "We wish you all happy holidays!" and the logo of
        a defunct sporting goods store. Hiding in a secluded corner, the researchers began to
        observe the actions of cyclists. There were no trash bins on the street, so a person could
        either throw a piece of paper on the ground, or hang it on another bicycle, or take it with
        him to throw it away later. The first two options were considered as a violation of the
        accepted norms, the third as their observance.</p>
        <p class="lead">Out of 77 cyclists, only 25 (33%) behaved uncivilized. Then the experiment was
        repeated, in the same weather and at the same time of the day, after having painted the wall
        with empty drawings. This time, 53 people out of 77 (69%) littered. The revealed difference
        has a high degree of statistical significance. Thus, violating the ban on painting on walls
        has proven to be a serious incentive for people to break another generally accepted rule -
        not litter on the streets.</p>
        <h2 class="card-title display-5">Experiment 2</h2>
        <p class="lead">The second experiment was to show whether the theory of broken windows is valid
        only for generally accepted norms, or whether it also applies to local rules established for
        a particular situation or place. The researchers blocked the main entrance to the car park
        with a fence, in which, however, a wide gap was left. Next to it they hung a sign "No entry,
        bypass 200 m to the right", as well as a notice "It is forbidden to fasten bicycles to the
        fence." The experiment was again carried out in two versions: "the order is observed" and
        "the order is violated." In the first case, four bicycles were standing a meter away from
        the fence, clearly not fastened to it. In the second case, the same bicycles were fastened
        to the fence. From a secluded place, the experimenters observed how citizens who came for
        their cars would behave: they would go around the fence or crawl through a hole. The result
        turned out to be positive: in the situation "the order is observed" only 27% of car owners
        crawled through the hole, and in the situation "the order was violated" - 82%</p>
        <h2 class="card-title display-5">Experiment 3</h2>
        <p class="lead">The third experiment was carried out in an underground supermarket parking lot
        with a large, highly visible notice “Please return shopping carts taken from the store”. In
        the situation "the order was observed" there were no carts in the parking lot, in the
        situation "the order was violated" there were four carts. The researchers prudently smeared
        their pens with fuel oil so that the visitors would not have a desire to use them. The same
        pieces of paper were attached to the machines as in the first experiment. The result was
        similar: in the first situation, 30% of drivers threw a piece of paper on the ground, in the
        second - 58%.</p>
        <h2 class="card-title display-5">Experiment 4</h2>
        <p class="lead">The fourth experiment resembled the first, with the difference that the signs of
        “violation of norms by other people” were now not visual, but sound. In the Netherlands, the
        use of firecrackers and fireworks on New Year's Eve is prohibited by law. It turned out that
        cyclists are much more likely to throw pieces of paper on the ground if they hear the sound
        of exploding firecrackers.</p>
        <h2 class="card-title display-5">Experiments 5 and 6</h2>
        <p class="lead">In the fifth and sixth experiments, people were provoked to petty theft. An envelope with a
        transparent window was sticking out of the mailbox, from which a 5 euro note was clearly
        visible. The experimenters watched people passing by, counting the number of thefts. In a
        “good order” situation, the mailbox was clean and there was no garbage around. In a “out of
        order” situation, either the box was painted with meaningless graffiti (experiment 5), or
        rubbish was lying around (experiment 6).</p>
        <p class="lead">In the situation "the order is observed" only 13% of passers-by (out of 71) took
        the envelope. However, 27% of passers-by (out of 60) stole an envelope from a painted box,
        and scattered garbage provoked 25% of people to steal (out of 72).</p>"
        `,
        "comments" : [
            {
                "author" : "John_Bob",
                "text" : "Woof!"
            },
            {
                "author" : "John_Bob",
                "text" : "Woof! Woof!"
            }
        ]
    }
];

let profiles = {
    "john_bob@kpi.ua" : {
        "username" : "John_Bob",
        "email" : "john_bob@kpi.ua",
        "date" : "23 may 2015",
        "gender" : "Male",
        "image" : "../example_img/profile_photo.jpg",
        "password" : "1"
    }
}

class DataProcessor {
    constructor () {
        this.ideas = data;
        this.profiles = profiles;
    }

    Username() {
        return sessionStorage.getItem('username');
    }

    IsLogIn() {
        return sessionStorage.getItem('username');
    }

    AddComment(idx, text) {
        let obj = {};
        obj['author'] = this.Username();
        obj['text'] = text;
        this.ideas[idx].comments.push(obj);
    }

    AddArticle(title, text, short) {
        if(short.length > 250 || short.length < 210) {
            alert("Preview must have 200-250 characters.");
            return;
        }
        let full_text = text.replaceAll('<p', '<p class="lead"').replaceAll('<h2', '<h2 class="card-title display-5"');
        let obj = {
            "title" : title,
            "image" : "../example_img/ideas_title_1.jpg",
            "short" : short,
            "full_text" : full_text,
            "comments" : []
        };
        console.log(obj);
        this.ideas.push(obj);
    }
}

let container = new DataProcessor();
export default container;
