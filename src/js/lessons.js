;(function(){

  const lessons = {
    sections: [
      {
        pages: [
          {
            title: "Introduction",
            hash: "introduction",
            template: "introduction",
            lesson: false
          },
          {
            title: "How to Type",
            hash: "how-to-type",
            template: "how-to-type",
            lesson: false
          },
          {
            title: "Using the Tutorial",
            hash: "using-the-tutorial",
            template: "using-the-tutorial",
            lesson: false
          },
        ]
      },
      {
        pages: [
          {
            title: "Lesson #1",
            fullTitle: "Lesson #1: Left Hand, Home Row",
            hash: "lesson-1",
            template: "lesson-1",
            lesson: true,
            text: "a s d f s d f f s d as sd ad fs ds sad af sa fa dafa sda dad das afa sfd add sasd df sf saf dds fd ads safd fsd fas sas dafs as fad",
            keys: {
              active: ["A", "S", "D", "F", "Space"],
              new: ["A", "S", "D", "F", "Space"]
            }
          },
          {
            title: "Lesson #2",
            fullTitle: "Lesson #2: Right Hand, Home Row",
            hash: "lesson-2",
            template: "lesson-2",
            lesson: true,
            text: "j k l ; l j k ; j l j k jk jl j; lk ;j jl kj jk ;j l; kl jl kj j klj kk j lj k klj jk; kkj jlk llj kjj ;k lj jk kj lk jj l kjl",
            keys: {
              active: ["J", "K", "L", ";", "Space"],
              new: ["J", "K", "L", ";"]
            }
          },
          {
            title: "Lesson #3",
            fullTitle: "Lesson #3: Both Hands, Home Row",
            hash: "lesson-3",
            template: "lesson-3",
            lesson: true,
            text: "all salads flask; jasks flak sad fall klad lad dajd aj jal safs; fads salks jads flads dj ask; dallas salad kalds afls;",
            keys: {
              active: ["A", "S", "D", "F", "J", "K", "L", ";", "Space"]
            }
          },
          {
            title: "Lesson #4",
            fullTitle: "Lesson #4: Home Row with G and H",
            hash: "lesson-4",
            template: "lesson-4",
            lesson: true,
            text: "f g fg gf j h jh hj had jag ask gag sagas gash hag klash flags add glad lag salad lash falls lads gas flask; shall sad dash halk glass",
            keys: {
              active: ["G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
              new: ["G", "H"]
            }
          },
          {
            title: "Lesson #5",
            fullTitle: "Lesson #5: E and I",
            hash: "lesson-5",
            template: "lesson-5",
            lesson: true,
            text: "d de ed de k ki ik ki fed sea hike fade flik jedi flies; skies dial isle seed file skied slide likes jails deal shield hide glide shells figs",
            keys: {
              active: ["E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
              new: ["E", "I"]
            }
          },
          {
            title: "Lesson #6",
            fullTitle: "Lesson #6: R and U",
            hash: "lesson-6",
            template: "lesson-6",
            lesson: true,
            text: "j u ju uj f r r f fr free juries real lull judge read fear shred dusk rash hush grease rake grid fudge hush fired deaf duke rude fired",
            keys: {
              active: ["R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
              new: ["R", "U"]
            }
          },
          {
            title: "Lesson #7",
            fullTitle: "Lesson #7: T and Y",
            hash: "lesson-7",
            template: "lesson-7",
            lesson: true,
            text: "f ft ftg j jy jyh retreat fly just kite year stay treat yikes hurt hurry they style yak dart health great take later litter haste justify",
            keys: {
              active: ["T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
              new: ["T", "Y"]
            }
          },
          {
            title: "Lesson #8",
            fullTitle: "Lesson #8: B and N",
            hash: "lesson-8",
            template: "lesson-8",
            lesson: true,
            text: "j n jn nj f b fb bf find big bury near jab junk burn brink nab bane nasal blind enable bring jab blend fans bandit nifty baffled banana",
            keys: {
              active: ["B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
              new: ["B", "N"]
            }
          },
          {
            title: "Lesson #9",
            fullTitle: "Lesson #9: V and M",
            hash: "lesson-9",
            template: "lesson-9",
            lesson: true,
            text: "f v fv fv j m jm jam vat man vase made mind venus move steam very ever middle veil viking never valve rhyme vanity hive",
            keys: {
              active: ["V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
              new: ["V", "M"]
            }
          },
          {
            title: "Lesson #10",
            fullTitle: "Lesson #10: W and O",
            hash: "lesson-10",
            template: "lesson-10",
            lesson: true,
            text: "s sw ws l lo ol lol work dock weak toy row lord mow worth newt song few lower wind howl web body write low frog jaw",
            keys: {
              active: ["W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
              new: ["W", "O"]
            }
          },
          {
            title: "Lesson #11",
            fullTitle: "Lesson #11: Q and P",
            hash: "lesson-11",
            template: "lesson-11",
            lesson: true,
            text: "a q aq aq ; ;p ;p play paper quit pale quin quail please quietly pink queen quip cape quart pantry equal please post quill",
            keys: {
              active: ["Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
              new: ["Q", "P"]
            }
          },
          {
            title: "Lesson #12",
            fullTitle: "Lesson #12: C and ,",
            hash: "lesson-12",
            template: "lesson-12",
            lesson: true,
            text: "d c dc cd k , k, ,k cat, cow, corn, city, comma; the black car cast quickly, counting, trace, occur space, cold, act, chat, and catch",
            keys: {
              active: ["C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
              new: ["C", ","]
            }
          },
          {
            title: "Lesson #13",
            fullTitle: "Lesson #13: Z, X, and .",
            hash: "lesson-13",
            template: "lesson-13",
            lesson: true,
            text: "a az za s x sx l l. .l tax. zap. extra exact. plaza axle waltz. f.o.x. pizza text. dizzy. exit taxi crazy. zoo exam. next prize",
            keys: {
              active: ["Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
              new: ["Z", "X", "."]
            }
          },
          {
            title: "Lesson #14",
            fullTitle: "Lesson #14: The Shift Key",
            hash: "lesson-14",
            template: "lesson-14",
            lesson: true,
            text: "France, Australia, U.S.A. Tom, Fred, Jan. Egypt Germany Washington. March, April, May, Thursday Friday Saturday.",
            keys: {
              active: ["Left-Shift", "Right-Shift", "Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
              new: ["Left-Shift", "Right-Shift"]
            }
          },
          {
            title: "Lesson #15",
            fullTitle: "Lesson #15: ? and !",
            hash: "lesson-15",
            template: "lesson-15",
            lesson: true,
            text: "; / ;? /? 1 ! 1!1! Where did he go? There! When? Now! Exit! Why? Because I said so! No! What? Really!? Yes!",
            keys: {
              active: ["?", "!", "Left-Shift", "Right-Shift", "Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
              new: ["?", "!"]
            }
          },
          {
            title: "Final Test",
            fullTitle: "Final Test",
            hash: "final-test",
            template: "final-test",
            lesson: true,
            text: "How does it feel to have completed our typing tutorial? Before you call yourself an expert, however, just pass this quick quiz. Do not be lazy, for if you do a careless job on this evaluation, you should take it again. Make your best effort. Doing great? Almost finished! Now time to get your score!",
            keys: {
              active: ["?", "!", "Left-Shift", "Right-Shift", "Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"]
            }
          }
        ]
      },
      {
        title: "Advanced",
        pages: [
          {
            title: "Lesson #1",
            fullTitle: "Advanced Lesson #1: ( and )",
            hash: "advanced-lesson-1",
            template: "advanced-lesson-1",
            lesson: true,
            text: "(cat) (hex) (zap) (goal) (sign) (seek) (extra) ((Good)game) (daily) ;) (quake) )( (Wreck) (barn) (orient) (open) (drop)",
            keys: {
              active: ["(", ")", "?", "!", "Left-Shift", "Right-Shift", "Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
              new: ["(", ")"]
            }
          },
          {
            title: "Lesson #2",
            fullTitle: "Advanced Lesson #2: ' and \"",
            hash: "advanced-lesson-2",
            template: "advanced-lesson-2",
            lesson: true,
            text: "Said Joy, \"Didn't, I hear 'yes?'\" \"No,\" said Quinn, \"It's not 'cause that's wrong.\" \"Listen to me!\" \"I heard you say 'no'.\" \"Let's not.\"",
            keys: {
              active: ["'", "(", ")", "?", "!", "Left-Shift", "Right-Shift", "Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
              new: ["'"]
            }
          },
          {
            title: "Lesson #3",
            fullTitle: "Advanced Lesson #3: :, -, and /",
            hash: "advanced-lesson-3",
            template: "advanced-lesson-3",
            lesson: true,
            text: "CD-ROM: Computer/monitor/keyboard: tools-for-using-computers. Red/Blue/Yellow: Color-scheme: Primary-colors. : )",
            keys: {
              active: ["-", "'", "(", ")", "?", "!", "Left-Shift", "Right-Shift", "Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
              new: ["-"]
            }
          },
        ]
      },
      {
        title: "Extra Practice",
        pages: [
          {
            title: "Practice #1",
            hash: "practice-1",
            template: "extra-practice-1",
            lesson: true,
            text: "\"They want to deliver vast amounts of information over the internet. And again, the internet is not something you just dump something on. It's not a truck. It's a series of tubes! And if you don't understand those tubes can be filled and if they are filled, when you put your message in, it gets in line and its going to be delayed by anyone that puts into that tube enormous amounts of material, enormous amounts of material.\"",
            keys: {
              active: ["-", "'", "(", ")", "?", "!", "Left-Shift", "Right-Shift", "Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"]
            }
          },
          {
            title: "Practice #2",
            hash: "practice-2",
            template: "extra-practice-2",
            lesson: true,
            text: "The name \"echo\" comes from the Greek nymph Echo. According to Greek mythology, Echo was a Nymph who had the job of talking incessantly to Hera, the Queen of the Gods. Hera caught on to Echo's trick and cursed her to only be able to say what others had just said - hence the word \"echo\". \"A duck's quack doesn't echo,\" is a much quoted scientific myth. The truth is that a duck's quack in fact, does echo, however it may be difficult to hear.",
            keys: {
              active: ["-", "'", "(", ")", "?", "!", "Left-Shift", "Right-Shift", "Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"]
            }
          },
          {
            title: "Practice #3",
            hash: "practice-3",
            template: "extra-practice-3",
            lesson: true,
            text: "The Walrus and the Carpenter walked on a mile or so, and then rested on a rock - conveniently low: and all the little oysters stood and waited in a row. \"The time has come,\" the Walrus said, \"To talk of many things: Of shoes-and ships-and sealing-wax-Of cabbages-and kings-And why the sea is boiling hot-And whether pigs have wings.\"",
            keys: {
              active: ["-", "'", "(", ")", "?", "!", "Left-Shift", "Right-Shift", "Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"]
            }
          },
          {
            title: "Practice #4",
            hash: "practice-4",
            template: "extra-practice-4",
            lesson: true,
            text: "Extreme Ironing (or EI) is an extreme sport and a performance art in which people take an ironing board to a remote location and iron a few items of clothing. According to the official website, extreme ironing is \"the latest danger sport that combines the thrills of an extreme outdoor activity with the satisfaction of a well-pressed shirt.\" Part of the attraction and interest the media has towards extreme ironing seems to centre on the issue of whether it is really a sport or not. It is widely considered to be tongue-in-cheek.",
            keys: {
              active: ["-", "'", "(", ")", "?", "!", "Left-Shift", "Right-Shift", "Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"]
            }
          },
          {
            title: "Practice #5",
            hash: "practice-5",
            template: "extra-practice-5",
            lesson: true,
            text: "Though the traditional notion of rain in the Western World is negative, rain can also bring joy, as some consider it to be soothing or enjoy the aesthetic appeal of it. In dry places, such as parts of Africa, Australia, India, and the Middle East, rain is greeted with euphoria. (In Botswana, the Setswana word for rain, \"pula,\" is used as the name of the national currency, in recognition of the economic importance of rain in this desert country.)",
            keys: {
              active: ["-", "'", "(", ")", "?", "!", "Left-Shift", "Right-Shift", "Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"]
            }
          }
        ]
      },
      {
        pages: [
          {
            title: "Resources",
            hash: "resources",
            template: "resources",
            lesson: false
          }
        ]
      }
    ]
  }

  lessons.pageMap = lessons.sections.reduce(function(mem, section){
    return section.pages.reduce(function(mem, page){
      mem[page.hash] = page
      return mem
    }, mem)
  }, {})

  const PackageDefinition = lessons
  const PackageName = "lessons"

  if ("undefined" !== typeof(exports)) module.exports = PackageDefinition
  else if ("function" === typeof(define) && define.amd) {
    define(PackageName, function() { return PackageDefinition })
  } else {
    window.App = window.App || {}
    window.App[PackageName] = PackageDefinition
  }

})()