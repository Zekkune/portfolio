export default function Projects () {

    const projects = [
        { name: 'Number Guessing Game', thumbnail: 'src/assets/thumbnails/numguess.png', thumbnail_alt: 'guesssing game thumbnail', disc: 'A simple, fun and challenging number guessing game with multiple difficulty levels and a limited number of lives. Test your luck and strategy as you try to guess the correct number before running out of chances!', link: 'https://zekkune-guessing-game.surge.sh/' },
        { name: 'TasteMate', thumbnail: 'src/assets/thumbnails/tastemate.png', disc: 'A recipe finder app that connects to an API databse to fetch and sort recipes based on ingredients, cuisine, or dietary preferences. Quickly find and explore curated recipes with detailed instructions and ingredient lists.', link: 'https://tastemate-cooking.netlify.app/' },
        { name: 'Tick-It', thumbnail: 'src/assets/thumbnails/tick-it.jpeg', disc: "Tick-IT is a user-friendly web platform that allows individuals to easily discover and purchase tickets for a wide range of events. Whether it's concerts, sports games, theater shows, or festivals, Tick-IT ensures a smooth and efficient experience for users to find and secure tickets to their favorite happenings.", link: 'https://github.com/Zekkune/tick-it' },
    ]
    return (
        <>
<div className="flex flex-row flex-wrap gap-2 justify-evenly h-full w-full dark:bg-[#212121] shadow-[5px_5px_10px_#1c1c1c,-5px_-5px_10px_#262626] p-4" id="Projects">
  {projects.map((project, index) => (
    <a href={project.link} target="_blank">
      <div key={index} className="relative flex flex-col w-[24rem] h-[28rem] mb-4 border border-driedblossom rounded-[10px] overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      {/* Background image */}
      <div className="absolute inset-0 bg-bcb bg-cover bg-center transform rotate-180 opacity-30 z-0" />
      
      {/* Image at the top */}
      <img src={project.thumbnail} alt={project.thumbnail_alt} className="w-full h-1/2 object-cover z-10 " />
      <h1 className="text-lg ml-2 dark:text-[#F5F5F5]">{project.name}</h1>
      
      {/* Content centered below the image */}
      <div className="flex flex-col justify-center items-center flex-grow z-10 p-4">

        <p className="text-white text-sm text-center mt-2">{project.disc}</p>
      </div>
    </div>
    </a>
  ))}
</div>



        </>
    )
}