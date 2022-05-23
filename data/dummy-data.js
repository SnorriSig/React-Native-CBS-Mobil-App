import Category from '../models/category';
import Event from '../models/event';

export const CATEGORIES = [
  new Category('c1', 'Economics and maths', '#f5428d'), //'Italian'
  new Category('c2', 'Languages and cultures', '#f54242'), //'Quick & Easy'
  new Category('c3', 'Communication in companies', '#f5a442'), //'Hamburgers'
  new Category('c4', 'International business relations', '#f5d142'), //'German'
  new Category('c5', 'IT and information in companies', '#368dff'), //'Light & Lovely'
  new Category('c6', 'People in organisations', '#368dff'), //'Light & Lovely'
  new Category('c7', 'Society and politics', '#41d95d'),
  new Category('c8', 'Business start-up and development', '#9eecff'),
  new Category('c9', 'Law', '#b9ffb0'),
  new Category('c10', 'All Events', '#47fced')
];

export const EVENTS = [
  new Event(
    'm1',
    ['c1', 'c7', 'c9', 'c10'],
    'Seminar 3: Individual bias, systemic bias, and feminist jurisprudence',
    'May 24',
    'Law, Economics and Philosophy',
    'https://blog.ipleaders.in/wp-content/uploads/2020/08/5ca25e53085abb7fe9b7ce7c_Blog-Headers.png',
    75,
    [
      'Presenter: Associate Professor Florence Villeseche, MPP, CBS',
      'Place: PHRs20.(Råvarebygningen), Porcelænshaven 18B, 1.154, 2000 Frederiksberg',
    ],
    [
    'Tuesday, May 24, 2022 - 14:15 to 15:30',
    'This seminar is the second out of four seminars in the MPP and CBS Law seminar series on Law, Economics and Philosophy Spring 2022.',
    'Title: Individual bias, systemic bias, and feminist jurisprudence – examining two examples in the Danish context',
    'Sign up here: cbs.nemtilmeld.dk',
    'Registration deadline: 21 May 2022'
  ]
  ),

  new Event(
    'm2',
    ['c7', 'c10'],
    'Are global value chains really resilient? Lessons from the Covid-19 pandemic and the war in Ukraine',
    'May 25',
    'Society and politics',
    'https://www.cbs.dk/files/cbs.dk/bqlt-graphic_2.png',
    90,
    [
      'Presenter: Gary Gereffi',
      'Venue: online (Zoom)',
    ],
    [
      '“Are global value chains really resilient? Lessons from the Covid-19 pandemic and the war in Ukraine” featuring Gary Gereffi, Director, Global Value Chains Center, Duke University, Durham, NC / USA.',
      'Abstract: Global supply chains have become a pervasive feature of daily life since the onset of the COVID-19 global pandemic in early 2020. However, the vulnerabilities created by supply-chain fragmentation have been an aspect of national security concerns due to the rise of economic nationalism, fraying geopolitical alignments, and trade wars since at least 2016. This presentation explores what global value chain (GVC) resiliency means in a post-pandemic world. A starting point is to recognize that resiliency is a multidimensional concept that has different meanings at three levels: the firm (operational efficiency vs. risk management); global industries or GVCs (appropriate governance structures and various diversification options); and countries (national security plus economic, social, and environmental priorities). COVID-19 medical supplies will be used to illustrate how resiliency dynamics vary at the product level, and the Russian military conflict with Ukraine is highlighting how global supply chains can be weaponized at the multilateral level. A few policy options for creating more resilient supply chains post-pandemic will be discussed.',
      'Find more information about the talk and the speaker, and sign up, on the Registration site.',
      'For further information, please contact Sarah Netter, sn.msc@cbs.dk.'
    ],
  ),

  new Event(
    'm3',
    ['c1', 'c10'],
    'The Economic Impact of Venture Capital: Evidence from Public Companies.',
    'June 3',
    'Department of Finance',
    'https://foundersguide.com/wp-content/uploads/2016/02/venture-capital.jpg',
    45,
    [
      'Presenter: Ilya Strebulaev',
      'Location: Zoom (virtual seminar) ',
    ],
    [
      'The Department of Finance is proud to announce the upcoming seminar with Ilya Strebulaev, Standford University.',
      'ABSTRACT: Venture capital-backed companies account for 41% of total US market capitalization and 62% of US public companies’ R&D spending. Among public companies founded within the last fifty years, VC-backed companies account for half in number, three quarters by value, and more than 92% of R&D spending and patent value. The US did not spawn top public companies at a higher rate than other large, developed countries prior to 1970s ERISA reforms, but produced twice as many after it. Using those reforms as a natural experiment suggests that the US VC industry is causally responsible for the rise of one-fifth of the current largest 300 US public companies and that three-quarters of the largest US VC-backed companies would not have existed or achieved their current scale without an active VC industry.',
    ],
  ),

  new Event(
    'm4',
    ['c5', 'c8', 'c10'],
    'Innovating in a Digital World',
    'June 5',
    'Innovation, IT',
    'https://blog.aci.aero/wp-content/uploads/2020/10/shutterstock_1669854280-952x635.jpg',
    60,
    [
      'Abayomi Baiyere',
      'Location:  Junior Researcher Lab',
    ],
    [
      'Junior Researcher Lab',
      'Abayomi Baiyere is our anchorperson at the event. Also, in relation to the platform, the ISPIM Junior Researcher Lab will form part of the conference. Find out more about the conference and the Junior Research Lab using the links above.',
    ],
  ),

  new Event(
    'm5',
    ['c1', 'c2', 'c3', 'c4', 'c5', 'c7', 'c8', 'c10'],
    'African Futures: Digitalization, Jobs and New Business Opportunities Conference',
    'June 8',
    'CBS Africa Initiative',
    'https://www.cbs.dk/files/cbs.dk/billede1_7.jpg',
    600,
    [
      'Wednesday, June 8, 2022 - 09:00 to 19:30',
      'Venue: CBS, Dalgas Have 15, 2000 Frederiksberg, Auditorium SC033',
    ],
    [
      'Africa is rising, or so the saying goes. Following this imaginary, many aspirations have been formulated and countless changes have taken place on the African continent over the last 10 years. Jobs and employment have been at the center of many debates on African futurity with the potential of digitalization playing an ever more prominent role in recent times. But what is actually happening on the ground? How do African entrepreneurs use digital tools and create new business models? And what are the implications of digitalisation for workers’ livelihoods?',
      'The CBS Africa Initiative — a cross-departmental network of researchers working on Africa — and the Inequality Platform would like to invite academics and practitioners interested in engaging with these questions to join us for the 1-day conference ‘African Futures: Digitalization, jobs and new business opportunities.’',
      'Find the programme and registration details on the registration site.',
      'In case of any questions, please feel free to reach out to the organizing team via mail: Ben - bha.msc@cbs.dk Sarah - sn.msc@cbs.dk',
    ],
  ),

  new Event(
    'm6',
    ['c4', 'c8', 'c10'],
    'Investor Opportunities in Green Infrastructure in Africa',
    'June 8',
    'Business and Development',
    'https://americas.ramboll.com/-/media/images/rde/environment/stu/tanner/tanner-springs-park_1360x765.jpg',
    90,
    [
      'Lecturer: Hubert Danso',
      'Wednesday, June 8, 2022 - 17:00 to 18:30',
      'Venue: CBS, Dalgas Have 15, 2000 Frederiksberg, Room SC033',
    ],
    [
      'The Centre for Business and Development Studies at Copenhagen Business School invite you to a public lecture with Hubert Danso, CEO of Africa Investor, on Investor Opportunities in Green Infrastructure in Africa.',
      'The event is supported by the Inequality Platform, the Danida Fellowship Centre’s Knowledge in Action initiative and  the Department of Management, Society and Communication. There will be an extended reception after the public lecture, with additional financial support from the CBS Africa Initiative. Register and read more about the event and Hubert Danso on the registration site. In case of any questions, please feel free to reach out to the organizing team via mail: Ben - bha.msc@cbs.dk Sarah - sn.msc@cbs.dk',
    ],
  ),

  new Event(
    'm7',
    ['c1', 'c10'],
    'AQR Top Finance Graduate Award 2022',
    'June 9',
    'Finance',
    'https://worldkings.org/Userfiles/Upload/images/Royal_Danish_Academy_of_Sciences_and_Letters2.jpg',
    360,
    [
      'The AQR Top Finance Graduate Award recognizes the most promising PhD graduates of the year. The event will be hosted on June 9, 2022 at the Royal Danish Academy of Science and Letters in Copenhagen.',
      'Thursday, June 9, 2022 - 12:00 to 18:00',
      'Location: Royal Danish Academy of Science and Letters in Copenhagen',
    ],
    [
      'The AQR Top Finance Graduate Award is a yearly event hosted and organized by Center for Financial Frictions (FRIC) and the Department of Finance at Copenhagen Business School. The award recognizes the most promising finance PhD graduates of the year. Specifically, the award recognizes the graduates specializing in financial economics pursuing degrees in any field of study, e.g. business or economics, whose dissertation and broader research potential carry the greatest promise of making an impact on the finance practice and academia. The event is sponsored by AQR Capital Management. More information will follow. ',
    ],
  ),

  new Event(
    'm8',
    ['c7','c8', 'c10'],
    'Roundtable: Can African Countries leapfrog to a Green Industrial Economy?',
    'June 9',
    'Development, Inequality',
    'https://www.cbs.dk/files/cbs.dk/roundtable.jpg',
    90,
    [
      'Speakers: Yunnan Chen, Charles Odoom, Tilman Altenburg, Gaylor Montmasson-Clair, Elvis Avenyo, Hazel Gray',
      'Thursday, June 9, 2022 - 15:30 to 17:00',
      'Venue: CBS, Dalgas Have 15, 2000 Frederiksberg, Room SC033',
    ],
    [
      'Organised by the Centre for Business and Development Studies and the Inequality Platform',
    'The Centre for Business and Development Studies and the Inequality Platform at Copenhagen Business School invite you to a roundtable on Can African Countries leapfrog to a Green Industrial Economy?',
    'The event is funded by the Inequality Platform, the Danida Fellowship Centre’s Knowledge in Action initiative and the Department of Management, Society and Communication. There will be a small reception after the roundtable.',
  'Please register for the event: Registration site.',
  'In case of any questions, please feel free to reach out to the organizing team via mail: Ben - bha.msc@cbs.dk Sarah - sn.msc@cbs.dk',  
  ],
  ),

  new Event(
    'm9',
    ['c1', 'c6', 'c10'],
    "FRIC'22 Conference on Financial Frictions",
    'June 10',
    'Finance',
    'https://www.photos-public-domain.com/wp-content/uploads/2018/03/personal-finance-money.jpg',
    90,
    [
      "The FRIC'22 Conference on Financial Frictions will take place on June 10, 2022 at CBS",
    ],
    [
      'Center for Financial Frictions (FRIC) and the Department of Finance, Copenhagen Business School are proud to announce the ninth and final FRIC Conference on Financial Frictions:',
      "FRIC'22 Conference on Financial Frictions",
      "This year's conference will take place on June 10, 2022 at Copenhagen Business School and will focus on banks, central banks and financial innovation. Keynote speakers include Darrell Duffie, Stanford Graduate School of Business, Itay Goldstein, Wharton School, University of Pennsylvania, and Viral Acharya, NYU Stern School of Business.",      'Place chocolate pieces in a metal mixing bowl.',
      'Find more information below and visit the conference website here: www.fricconference.cbs.dk',
      "PROGRAM See the exceptional line-up of speakers below and find the full conference program here.",
      'Darrell Duffie, Stanford Graduate School of Business Itay Goldstein, Wharton School, University of Pennsylvania Viral Acharya, NYU Stern School of Business',
      'Steven Ongena, University of Zurich Howard Kung, London Business School Signe Krogstrup, Danmarks Nationalbank',
      'Tobias Berg, Frankfurt School of Finance & Management Christian Wagner, WU Vienna University of Economics and Business',
      'Place 2 egg whites in a mixing bowl; add cream of tartar. Whisk until mixture begins to thicken and a drizzle from the whisk stays on the surface about 1 second before disappearing into the mix.',
      'Add 1/3 of sugar and whisk in. Whisk in a bit more sugar about 15 seconds.',
      "If you would like to participate in this year's FRIC conference, please sign up on the conference website here. Deadline for registration is June 2, 2022 at noon.",
    ],
  ),
  new Event(
    'm10',
    ['c6', 'c7', 'c10'],
    'Money in Politics Conference',
    'June 15',
    'Business, Politics',
    'https://trofire.com/wp-content/uploads/2016/10/100316-Political-Money.jpg',
    600,
    [
      'Wednesday, June 15, 2022 (All day) to Friday, June 17, 2022 (All day)',
      'The conferences is organized by Mogens K. Justesen and Benjamin Egerod, based on a grant from the Danish Ministry of Higher Education and Science.',
    ],
    [
      'Please follow the link for the call for papers.',
    ],
  )
];