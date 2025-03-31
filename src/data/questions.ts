import { Question } from '../types';

export const categoryQuestions: Record<string, Question[]> = {
  '1': [ // Computer Science
    {
      id: '1',
      question: 'What does CPU stand for?',
      options: ['Central Processing Unit', 'Computer Personal Unit', 'Central Program Utility', 'Computer Processing Utility'],
      correctAnswer: 'Central Processing Unit',
      explanation: 'CPU (Central Processing Unit) is the primary component of a computer that performs most of the processing inside the computer.'
    },
    {
      id: '2',
      question: 'Which programming language is known as the "mother of all languages"?',
      options: ['C', 'Python', 'Assembly', 'FORTRAN'],
      correctAnswer: 'C',
      explanation: 'C is often called the mother of all programming languages because many modern programming languages have derived syntax and features from it.'
    },
    {
      id: '3',
      question: 'What is the primary purpose of an operating system?',
      options: [
        'To manage hardware and software resources',
        'To provide games',
        'To browse the internet',
        'To create documents'
      ],
      correctAnswer: 'To manage hardware and software resources',
      explanation: 'An operating system manages computer hardware and software resources and provides common services for computer programs.'
    },
    {
      id: '4',
      question: 'What is the smallest unit of digital information?',
      options: ['Bit', 'Byte', 'Kilobyte', 'Megabyte'],
      correctAnswer: 'Bit',
      explanation: 'A bit (binary digit) is the basic unit of information in computing, representing a single binary value: either 0 or 1.'
    },
    {
      id: '5',
      question: 'What does HTML stand for?',
      options: [
        'Hypertext Markup Language',
        'High Technical Modern Language',
        'Hypertext Modern Links',
        'High Text Markup Language'
      ],
      correctAnswer: 'Hypertext Markup Language',
      explanation: 'HTML is the standard markup language for creating web pages and web applications.'
    },
    {
      id: '6',
      question: 'Which data structure uses LIFO?',
      options: ['Stack', 'Queue', 'Tree', 'Graph'],
      correctAnswer: 'Stack',
      explanation: 'A stack uses LIFO (Last In, First Out) principle, where the last element added is the first one to be removed.'
    },
    {
      id: '7',
      question: 'What is an algorithm?',
      options: [
        'A step-by-step procedure to solve a problem',
        'A programming language',
        'A computer hardware component',
        'A type of software'
      ],
      correctAnswer: 'A step-by-step procedure to solve a problem',
      explanation: 'An algorithm is a finite sequence of well-defined instructions to solve a specific problem or perform a computation.'
    },
    {
      id: '8',
      question: 'What is the purpose of SQL?',
      options: [
        'Managing and querying databases',
        'Creating web pages',
        'Writing operating systems',
        'Developing mobile apps'
      ],
      correctAnswer: 'Managing and querying databases',
      explanation: 'SQL (Structured Query Language) is used to communicate with and manipulate databases.'
    },
    {
      id: '9',
      question: 'What is a compiler?',
      options: [
        'A program that converts source code to machine code',
        'A type of computer memory',
        'A networking device',
        'An input device'
      ],
      correctAnswer: 'A program that converts source code to machine code',
      explanation: 'A compiler translates high-level programming language code into machine code that can be directly executed by the computer.'
    },
    {
      id: '10',
      question: 'What is the function of RAM in a computer?',
      options: [
        'Temporary data storage',
        'Permanent data storage',
        'Processing calculations',
        'Displaying graphics'
      ],
      correctAnswer: 'Temporary data storage',
      explanation: 'RAM (Random Access Memory) provides temporary storage for data and programs that are currently in use by the computer.'
    }
  ],
  '2': [ // Mathematics
    {
      id: '1',
      question: 'What is the value of π (pi) to two decimal places?',
      options: ['3.14', '3.41', '3.12', '3.16'],
      correctAnswer: '3.14',
      explanation: 'Pi (π) is approximately equal to 3.14159..., but is commonly rounded to 3.14 for basic calculations.'
    },
    {
      id: '2',
      question: 'What is the square root of 144?',
      options: ['12', '14', '10', '16'],
      correctAnswer: '12',
      explanation: '12 × 12 = 144, therefore 12 is the square root of 144.'
    },
    {
      id: '3',
      question: 'What is the result of 7 × 8?',
      options: ['56', '54', '58', '52'],
      correctAnswer: '56',
      explanation: 'Seven multiplied by eight equals fifty-six (7 × 8 = 56).'
    },
    {
      id: '4',
      question: 'Which of these numbers is prime?',
      options: ['17', '21', '25', '27'],
      correctAnswer: '17',
      explanation: '17 is a prime number because its only factors are 1 and itself.'
    },
    {
      id: '5',
      question: 'What is the sum of angles in a triangle?',
      options: ['180°', '360°', '90°', '270°'],
      correctAnswer: '180°',
      explanation: 'The sum of the measures of the three angles of any triangle is 180 degrees.'
    },
    {
      id: '6',
      question: 'What is 25% of 80?',
      options: ['20', '25', '15', '30'],
      correctAnswer: '20',
      explanation: '25% is equal to ¼, and ¼ of 80 is 20 (80 ÷ 4 = 20).'
    },
    {
      id: '7',
      question: 'What is the next number in the sequence: 2, 4, 8, 16, ...?',
      options: ['32', '24', '30', '28'],
      correctAnswer: '32',
      explanation: 'Each number in the sequence is doubled to get the next number (2×2=4, 4×2=8, 8×2=16, 16×2=32).'
    },
    {
      id: '8',
      question: 'What is the area of a square with sides of length 5?',
      options: ['25', '20', '30', '10'],
      correctAnswer: '25',
      explanation: 'The area of a square is found by squaring the length of one side (5 × 5 = 25).'
    },
    {
      id: '9',
      question: 'What is the result of 15 + (-7)?',
      options: ['8', '22', '-8', '10'],
      correctAnswer: '8',
      explanation: 'When adding a negative number, we subtract its absolute value (15 - 7 = 8).'
    },
    {
      id: '10',
      question: 'What is the perimeter of a rectangle with length 6 and width 4?',
      options: ['20', '24', '16', '18'],
      correctAnswer: '20',
      explanation: 'The perimeter of a rectangle is found by adding all sides (6 + 6 + 4 + 4 = 20).'
    }
  ],
  '3': [ // Science
    {
      id: '1',
      question: 'What is the chemical symbol for gold?',
      options: ['Au', 'Ag', 'Fe', 'Cu'],
      correctAnswer: 'Au',
      explanation: 'Au is the chemical symbol for gold, derived from the Latin word "aurum".'
    },
    {
      id: '2',
      question: 'What is the speed of light in vacuum?',
      options: ['299,792 km/s', '199,792 km/s', '399,792 km/s', '249,792 km/s'],
      correctAnswer: '299,792 km/s',
      explanation: 'Light travels at approximately 299,792 kilometers per second in a vacuum.'
    },
    {
      id: '3',
      question: 'What is the hardest natural substance on Earth?',
      options: ['Diamond', 'Gold', 'Iron', 'Platinum'],
      correctAnswer: 'Diamond',
      explanation: 'Diamond is the hardest naturally occurring substance known to mankind.'
    },
    {
      id: '4',
      question: 'What is the process by which plants make their food?',
      options: ['Photosynthesis', 'Respiration', 'Digestion', 'Absorption'],
      correctAnswer: 'Photosynthesis',
      explanation: 'Photosynthesis is the process by which plants convert light energy into chemical energy to produce glucose.'
    },
    {
      id: '5',
      question: 'What is the largest organ in the human body?',
      options: ['Skin', 'Liver', 'Heart', 'Brain'],
      correctAnswer: 'Skin',
      explanation: 'The skin is the largest organ of the human body, covering an area of about 20 square feet in adults.'
    },
    {
      id: '6',
      question: 'Which gas do plants absorb from the air for photosynthesis?',
      options: ['Carbon dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen'],
      correctAnswer: 'Carbon dioxide',
      explanation: 'Plants absorb carbon dioxide from the air and use it in photosynthesis to produce glucose.'
    },
    {
      id: '7',
      question: 'What is the atomic number of oxygen?',
      options: ['8', '6', '7', '9'],
      correctAnswer: '8',
      explanation: 'Oxygen has 8 protons in its nucleus, giving it an atomic number of 8.'
    },
    {
      id: '8',
      question: 'What force keeps planets in orbit around the Sun?',
      options: ['Gravity', 'Magnetism', 'Friction', 'Nuclear force'],
      correctAnswer: 'Gravity',
      explanation: 'Gravitational force keeps planets in their orbits around the Sun.'
    },
    {
      id: '9',
      question: 'What is the unit of electric current?',
      options: ['Ampere', 'Volt', 'Watt', 'Ohm'],
      correctAnswer: 'Ampere',
      explanation: 'The ampere (A) is the SI unit of electric current.'
    },
    {
      id: '10',
      question: 'What is the process of water changing from liquid to gas called?',
      options: ['Evaporation', 'Condensation', 'Freezing', 'Melting'],
      correctAnswer: 'Evaporation',
      explanation: 'Evaporation is the process where liquid water changes into water vapor (gas).'
    }
  ],
  '4': [ // Geography
    {
      id: '1',
      question: 'What is the capital of Japan?',
      options: ['Tokyo', 'Kyoto', 'Osaka', 'Seoul'],
      correctAnswer: 'Tokyo',
      explanation: 'Tokyo is the capital and largest city of Japan.'
    },
    {
      id: '2',
      question: 'Which is the largest ocean on Earth?',
      options: ['Pacific', 'Atlantic', 'Indian', 'Arctic'],
      correctAnswer: 'Pacific',
      explanation: 'The Pacific Ocean is the largest and deepest ocean on Earth.'
    },
    {
      id: '3',
      question: 'Which continent is the largest by land area?',
      options: ['Asia', 'Africa', 'North America', 'Europe'],
      correctAnswer: 'Asia',
      explanation: 'Asia is the largest continent by land area, covering approximately 44.5 million square kilometers.'
    },
    {
      id: '4',
      question: 'What is the longest river in the world?',
      options: ['Nile', 'Amazon', 'Mississippi', 'Yangtze'],
      correctAnswer: 'Nile',
      explanation: 'The Nile River is the longest river in the world, stretching 6,650 kilometers.'
    },
    {
      id: '5',
      question: 'Which country has the largest population?',
      options: ['India', 'China', 'USA', 'Indonesia'],
      correctAnswer: 'India',
      explanation: 'As of 2024, India has surpassed China as the most populous country in the world.'
    },
    {
      id: '6',
      question: 'What is the highest mountain in the world?',
      options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Lhotse'],
      correctAnswer: 'Mount Everest',
      explanation: 'Mount Everest, at 8,848 meters above sea level, is the highest mountain on Earth.'
    },
    {
      id: '7',
      question: 'Which is the largest desert in the world?',
      options: ['Antarctic Desert', 'Sahara Desert', 'Arctic Desert', 'Gobi Desert'],
      correctAnswer: 'Antarctic Desert',
      explanation: 'The Antarctic Desert is the largest cold desert in the world.'
    },
    {
      id: '8',
      question: 'Which country is known as the Land of the Rising Sun?',
      options: ['Japan', 'China', 'South Korea', 'Vietnam'],
      correctAnswer: 'Japan',
      explanation: 'Japan is known as the Land of the Rising Sun because from China, the sun appeared to rise from the direction of Japan.'
    },
    {
      id: '9',
      question: 'Which continent is the driest inhabited continent on Earth?',
      options: ['Australia', 'Africa', 'Asia', 'Europe'],
      correctAnswer: 'Australia',
      explanation: 'Australia is the driest inhabited continent on Earth, with an average annual rainfall of less than 500 mm.'
    },
    {
      id: '10',
      question: 'What is the capital of Brazil?',
      options: ['Brasília', 'Rio de Janeiro', 'São Paulo', 'Salvador'],
      correctAnswer: 'Brasília',
      explanation: 'Brasília has been the capital of Brazil since 1960, taking over from Rio de Janeiro.'
    }
  ],
  '5': [ // Biology
    {
      id: '1',
      question: 'What is the powerhouse of the cell?',
      options: ['Mitochondria', 'Nucleus', 'Ribosome', 'Golgi body'],
      correctAnswer: 'Mitochondria',
      explanation: 'Mitochondria are called the powerhouse of the cell because they produce most of the cell\'s energy through ATP production.'
    },
    {
      id: '2',
      question: 'What is the process of cell division called?',
      options: ['Mitosis', 'Metabolism', 'Meiosis', 'Photosynthesis'],
      correctAnswer: 'Mitosis',
      explanation: 'Mitosis is the process of cell division where one cell divides into two identical daughter cells.'
    },
    {
      id: '3',
      question: 'What is the basic unit of life?',
      options: ['Cell', 'Atom', 'Molecule', 'Tissue'],
      correctAnswer: 'Cell',
      explanation: 'The cell is the basic structural and functional unit of all known living organisms.'
    },
    {
      id: '4',
      question: 'Which blood type is known as the universal donor?',
      options: ['O negative', 'A positive', 'B negative', 'AB positive'],
      correctAnswer: 'O negative',
      explanation: 'O negative blood can be given to patients of all blood types, making it the universal donor type.'
    },
    {
      id: '5',
      question: 'What is the largest organ in the human body?',
      options: ['Skin', 'Liver', 'Brain', 'Heart'],
      correctAnswer: 'Skin',
      explanation: 'The skin is the largest organ of the human body, both by weight and surface area.'
    },
    {
      id: '6',
      question: 'What carries oxygen in red blood cells?',
      options: ['Hemoglobin', 'Plasma', 'White blood cells', 'Platelets'],
      correctAnswer: 'Hemoglobin',
      explanation: 'Hemoglobin is the protein in red blood cells that carries oxygen throughout the body.'
    },
    {
      id: '7',
      question: 'Which of these is not a type of blood vessel?',
      options: ['Lymph node', 'Artery', 'Vein', 'Capillary'],
      correctAnswer: 'Lymph node',
      explanation: 'Lymph nodes are part of the lymphatic system, not blood vessels. Blood vessels include arteries, veins, and capillaries.'
    },
    {
      id: '8',
      question: 'What is the process of converting glucose into energy called?',
      options: ['Cellular respiration', 'Photosynthesis', 'Fermentation', 'Digestion'],
      correctAnswer: 'Cellular respiration',
      explanation: 'Cellular respiration is the process by which cells break down glucose to produce energy in the form of ATP.'
    },
    {
      id: '9',
      question: 'Which organ is responsible for producing insulin?',
      options: ['Pancreas', 'Liver', 'Kidney', 'Stomach'],
      correctAnswer: 'Pancreas',
      explanation: 'The pancreas produces insulin, which regulates blood sugar levels in the body.'
    },
    {
      id: '10',
      question: 'What is the study of heredity called?',
      options: ['Genetics', 'Biology', 'Physiology', 'Anatomy'],
      correctAnswer: 'Genetics',
      explanation: 'Genetics is the study of genes, heredity, and variation in living organisms.'
    }
  ],
  '6': [ // Art History
    {
      id: '1',
      question: 'Who painted the Mona Lisa?',
      options: ['Leonardo da Vinci', 'Michelangelo', 'Raphael', 'Vincent van Gogh'],
      correctAnswer: 'Leonardo da Vinci',
      explanation: 'The Mona Lisa was painted by Leonardo da Vinci in the early 16th century.'
    },
    {
      id: '2',
      question: 'Which art movement did Salvador Dalí belong to?',
      options: ['Surrealism', 'Impressionism', 'Cubism', 'Pop Art'],
      correctAnswer: 'Surrealism',
      explanation: 'Salvador Dalí was a prominent figure in the Surrealist movement, known for his dreamlike and bizarre images.'
    },
    {
      id: '3',
      question: 'Who cut off his own ear?',
      options: ['Vincent van Gogh', 'Pablo Picasso', 'Claude Monet', 'Edgar Degas'],
      correctAnswer: 'Vincent van Gogh',
      explanation: 'Vincent van Gogh famously cut off part of his left ear during a mental health crisis in 1888.'
    },
    {
      id: '4',
      question: 'Which artist is known for painting "The Starry Night"?',
      options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Claude Monet'],
      correctAnswer: 'Vincent van Gogh',
      explanation: '"The Starry Night" was painted by Vincent van Gogh in 1889 while he was staying at the Saint-Paul-de-Mausole asylum.'
    },
    {
      id: '5',
      question: 'Who painted "The Persistence of Memory" with melting clocks?',
      options: ['Salvador Dalí', 'Pablo Picasso', 'René Magritte', 'Frida Kahlo'],
      correctAnswer: 'Salvador Dalí',
      explanation: '"The Persistence of Memory" is a famous surrealist painting by Salvador Dalí, completed in 1931.'
    },
    {
      id: '6',
      question: 'Which artistic movement is Claude Monet associated with?',
      options: ['Impressionism', 'Cubism', 'Surrealism', 'Pop Art'],
      correctAnswer: 'Impressionism',
      explanation: 'Claude Monet was a founder of French Impressionist painting, which emphasized light and natural forms.'
    },
    {
      id: '7',
      question: 'Who painted the ceiling of the Sistine Chapel?',
      options: ['Michelangelo', 'Leonardo da Vinci', 'Raphael', 'Donatello'],
      correctAnswer: 'Michelangelo',
      explanation: 'Michelangelo painted the ceiling of the Sistine Chapel between 1508 and 1512.'
    },
    {
      id: '8',
      question: 'Which artist is known for painting soup cans?',
      options: ['Andy Warhol', 'Roy Lichtenstein', 'Jackson Pollock', 'Willem de Kooning'],
      correctAnswer: 'Andy Warhol',
      explanation: 'Andy Warhol created the famous Campbell\'s Soup Cans series in 1962, an iconic work of Pop Art.'
    },
    {
      id: '9',
      question: 'What nationality was Pablo Picasso?',
      options: ['Spanish', 'French', 'Italian', 'Dutch'],
      correctAnswer: 'Spanish',
      explanation: 'Pablo Picasso was born in Málaga, Spain, though he spent much of his adult life in France.'
    },
    {
      id: '10',
      question: 'Which artist is famous for her self-portraits with prominent eyebrows?',
      options: ['Frida Kahlo', 'Georgia O\'Keeffe', 'Mary Cassatt', 'Louise Bourgeois'],
      correctAnswer: 'Frida Kahlo',
      explanation: 'Frida Kahlo was known for her many self-portraits and works inspired by nature and Mexican culture.'
    }
  ],
  '7': [ // Music Theory
    {
      id: '1',
      question: 'What are the five lines and four spaces in sheet music called?',
      options: ['Staff', 'Clef', 'Bar', 'Measure'],
      correctAnswer: 'Staff',
      explanation: 'The staff is the fundamental latticework of music notation, comprising five horizontal lines and four spaces.'
    },
    {
      id: '2',
      question: 'What does "forte" mean in music?',
      options: ['Loud', 'Soft', 'Fast', 'Slow'],
      correctAnswer: 'Loud',
      explanation: 'Forte is an Italian musical term meaning "loud" or "strong".'
    },
    {
      id: '3',
      question: 'How many beats are in a measure of 4/4 time?',
      options: ['4', '3', '2', '6'],
      correctAnswer: '4',
      explanation: 'In 4/4 time, also known as common time, there are four beats per measure.'
    },
    {
      id: '4',
      question: 'What is the symbol called that raises a note by a half step?',
      options: ['Sharp', 'Flat', 'Natural', 'Rest'],
      correctAnswer: 'Sharp',
      explanation: 'A sharp (♯) raises the pitch of a note by one half step.'
    },
    {
      id: '5',
      question: 'What is a group of eight notes called?',
      options: ['Octave', 'Scale', 'Chord', 'Triad'],
      correctAnswer: 'Octave',
      explanation: 'An octave is the interval between one musical pitch and another with double its frequency.'
    },
    {
      id: '6',
      question: 'What is the most common key signature in popular music?',
      options: ['C major', 'G major', 'D major', 'A major'],
      correctAnswer: 'C major',
      explanation: 'C major is the most common key signature as it has no sharps or flats.'
    },
    {
      id: '7',
      question: 'What is a series of three or more notes played together called?',
      options: ['Chord', 'Scale', 'Melody', 'Harmony'],
      correctAnswer: 'Chord',
      explanation: 'A chord is three or more notes played simultaneously.'
    },
    {
      id: '8',
      question: 'What does "piano" mean in music?',
      options: ['Soft', 'Loud', 'Fast', 'Slow'],
      correctAnswer: 'Soft',
      explanation: 'Piano is an Italian musical term meaning "soft" or "quiet".'
    },
    {
      id: '9',
      question: 'What is the symbol that lowers a note by a half step?',
      options: ['Flat', 'Sharp', 'Natural', 'Rest'],
      correctAnswer: 'Flat',
      explanation: 'A flat (♭) lowers the pitch of a note by one half step.'
    },
    {
      id: '10',
      question: 'What is the term for gradually getting louder?',
      options: ['Crescendo', 'Diminuendo', 'Ritardando', 'Accelerando'],
      correctAnswer: 'Crescendo',
      explanation: 'Crescendo means gradually increasing in volume or intensity.'
    }
  ],
  '8': [ // Literature
    {
      id: '1',
      question: 'Who wrote "Romeo and Juliet"?',
      options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'],
      correctAnswer: 'William Shakespeare',
      explanation: '"Romeo and Juliet" was written by William Shakespeare in the late 16th century.'
    },
    {
      id: '2',
      question: 'What is the first book in "The Chronicles of Narnia" series?',
      options: ['The Lion, the Witch and the Wardrobe', 'Prince Caspian', 'The Magician\'s Nephew', 'The Silver Chair'],
      correctAnswer: 'The Lion, the Witch and the Wardrobe',
      explanation: 'While "The Magician\'s Nephew" is first chronologically, "The Lion, the Witch and the Wardrobe" was the first published.'
    },
    {
      id: '3',
      question: 'Who wrote "Pride and Prejudice"?',
      options: ['Jane Austen', 'Emily Brontë', 'Charlotte Brontë', 'Virginia Woolf'],
      correctAnswer: 'Jane Austen',
      explanation: '"Pride and Prejudice" was written by Jane Austen and published in 1813.'
    },
    {
      id: '4',
      question: 'What is the name of Harry Potter\'s owl?',
      options: ['Hedwig', 'Errol', 'Fawkes', 'Pigwidgeon'],
      correctAnswer: 'Hedwig',
      explanation: 'Hedwig was Harry Potter\'s snowy owl, given to him by Hagrid on his 11th birthday.'
    },
    {
      id: '5',
      question: 'Who wrote "1984"?',
      options: ['George Orwell', 'Aldous Huxley', 'Ray Bradbury', 'Philip K. Dick'],
      correctAnswer: 'George Orwell',
      explanation: '"1984" was written by George Orwell and published in 1949.'
    },
    {
      id: '6',
      question: 'What is the title of the first book in "The Lord of the Rings" trilogy?',
      options: ['The Fellowship of the Ring', 'The Two Towers', 'The Return of the King', 'The Hobbit'],
      correctAnswer: 'The Fellowship of the Ring',
      explanation: '"The Fellowship of the Ring" is the first volume of J.R.R. Tolkien\'s "The Lord of the Rings".'
    },
    {
      id: '7',
      question: 'Who wrote "The Great Gatsby"?',
      options: ['F. Scott Fitzgerald', 'Ernest Hemingway', 'John Steinbeck', 'William Faulkner'],
      correctAnswer: 'F. Scott Fitzgerald',
      explanation: '"The Great Gatsby" was written by F. Scott Fitzgerald and published in 1925.'
    },
    {
      id: '8',
      question: 'What is the name of the protagonist in "The Catcher in the Rye"?',
      options: ['Holden Caulfield', 'Jay Gatsby', 'Atticus Finch', 'Scout Finch'],
      correctAnswer: 'Holden Caulfield',
      explanation: 'Holden Caulfield is the teenage protagonist of J.D. Salinger\'s "The Catcher in the Rye".'
    },
    {
      id: '9',
      question: 'Who wrote "To Kill a Mockingbird"?',
      options: ['Harper Lee', 'Maya Angelou', 'Toni Morrison', 'Alice Walker'],
      correctAnswer: 'Harper Lee',
      explanation: '"To Kill a Mockingbird" was written by Harper Lee and published in 1960.'
    },
    {
      id: '10',
      question: 'What is the setting of "The Great Gatsby"?',
      options: ['New York', 'Chicago', 'Los Angeles', 'Boston'],
      correctAnswer: 'New York',
      explanation: '"The Great Gatsby" is set in New York in the summer of 1922, primarily in Long Island.'
    }
  ],
  '9': [ // Space Science
    {
      id: '1',
      question: 'What is the closest star to Earth?',
      options: ['The Sun', 'Proxima Centauri', 'Alpha Centauri', 'Sirius'],
      correctAnswer: 'The Sun',
      explanation: 'The Sun is the closest star to Earth, at an average distance of about 93 million miles.'
    },
    {
      id: '2',
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter', 'Mercury'],
      correctAnswer: 'Mars',
      explanation: 'Mars is called the Red Planet due to its reddish appearance caused by iron oxide (rust) on its surface.'
    },
    {
      id: '3',
      question: 'What is the largest planet in our solar system?',
      options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
      correctAnswer: 'Jupiter',
      explanation: 'Jupiter is the largest planet in our solar system, with a mass more than twice that of all other planets combined.'
    },
    {
      id: '4',
      question: 'What is the name of Earth\'s only natural satellite?',
      options: ['The Moon', 'Titan', 'Europa', 'Phobos'],
      correctAnswer: 'The Moon',
      explanation: 'The Moon is Earth\'s only natural satellite, orbiting at an average distance of 238,855 miles.'
    },
    {
      id: '5',
      question: 'What is the name of the galaxy containing our solar system?',
      options: ['Milky Way',  'Andromeda', 'Triangulum', 'Sombrero'],
      correctAnswer: 'Milky Way',
      explanation: 'Our solar system is located in the Milky Way galaxy, a spiral galaxy containing billions of stars.'
    },
    {
      id: '6',
      question: 'What is a black hole?',
      options: [
        'A region where gravity prevents anything from escaping',
        'A type of star',
        'An empty region of space',
        'A type of galaxy'
      ],
      correctAnswer: 'A region where gravity prevents anything from escaping',
      explanation: 'A black hole is a region of spacetime where gravity is so strong that nothing can escape from it, not even light.'
    },
    {
      id: '7',
      question: 'Which planet is known as the "Morning Star"?',
      options: ['Venus', 'Mars', 'Mercury', 'Jupiter'],
      correctAnswer: 'Venus',
      explanation: 'Venus is often called the Morning Star when visible in the early morning sky before sunrise.'
    },
    {
      id: '8',
      question: 'What causes the seasons on Earth?',
      options: [
        'Earth\'s tilted axis',
        'Distance from the Sun',
        'The Moon\'s gravity',
        'Solar winds'
      ],
      correctAnswer: 'Earth\'s tilted axis',
      explanation: 'Earth\'s seasons are caused by its tilted axis as it orbits the Sun, affecting how directly sunlight hits different regions.'
    },
    {
      id: '9',
      question: 'What is the Great Red Spot on Jupiter?',
      options: ['A storm', 'A volcano', 'A crater', 'A desert'],
      correctAnswer: 'A storm',
      explanation: 'The Great Red Spot is a giant storm on Jupiter that has been raging for at least 400 years.'
    },
    {
      id: '10',
      question: 'What is the name of the force that keeps planets in orbit?',
      options: ['Gravity', 'Magnetism', 'Nuclear force', 'Electromagnetism'],
      correctAnswer: 'Gravity',
      explanation: 'Gravity is the force that keeps planets in orbit around the Sun and moons in orbit around planets.'
    }
  ],
  '10': [ // Sports
    {
      id: '1',
      question: 'How many players are on a standard soccer team during a match?',
      options: ['11', '10', '12', '9'],
      correctAnswer: '11',
      explanation: 'A standard soccer team has 11 players on the field during a match.'
    },
    {
      id: '2',
      question: 'In which sport would you perform a slam dunk?',
      options: ['Basketball', 'Volleyball', 'Tennis', 'Football'],
      correctAnswer: 'Basketball',
      explanation: 'A slam dunk is a type of scoring shot in basketball where a player jumps and forcefully puts the ball through the hoop.'
    },
    {
      id: '3',
      question: 'How many points is a touchdown worth in American football?',
      options: ['6', '7', '3', '2'],
      correctAnswer: '6',
      explanation: 'A touchdown in American football is worth 6 points, with the opportunity to score additional points through conversion.'
    },
    {
      id: '4',
      question: 'What is the diameter of a basketball hoop in inches?',
      options: ['18', '16', '20', '22'],
      correctAnswer: '18',
      explanation: 'A regulation basketball hoop has a diameter of 18 inches.'
    },
    {
      id: '5',
      question: 'In which sport would you use a shuttlecock?',
      options: ['Badminton', 'Tennis', 'Table Tennis', 'Squash'],
      correctAnswer: 'Badminton',
      explanation: 'A shuttlecock (also called a birdie) is used in badminton.'
    },
    {
      id: '6',
      question: 'How many periods are there in an ice hockey game?',
      options: ['3', '2', '4', '5'],
      correctAnswer: '3',
      explanation: 'A standard ice hockey game consists of three 20-minute periods.'
    },
    {
      id: '7',
      question: 'What is the maximum number of clubs allowed in a golf bag during a round?',
      options: ['14', '12', '16', '18'],
      correctAnswer: '14',
      explanation: 'According to golf rules, a player is allowed to carry a maximum of 14 clubs in their bag during a round.'
    },
    {
      id: '8',
      question: 'In which sport would you perform a serve?',
      options: ['All of the above', 'Tennis', 'Volleyball', 'Table Tennis'],
      correctAnswer: 'All of the above',
      explanation: 'Serving is a fundamental part of tennis, volleyball, and table tennis.'
    },
    {
      id: '9',
      question: 'How many players are on a baseball team during play?',
      options: ['9', '8', '10', '11'],
      correctAnswer: '9',
      explanation: 'A baseball team has 9 players on the field during play.'
    },
    {
      id: '10',
      question: 'What is the length of an Olympic swimming pool in meters?',
      options: ['50', '25', '75', '100'],
      correctAnswer: '50',
      explanation: 'An Olympic-size swimming pool is 50 meters in length.'
    }
  ]
};