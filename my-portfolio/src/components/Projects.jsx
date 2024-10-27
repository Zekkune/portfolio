export default function Projects () {

    const projects = [
        { name: 'Test Name 1', thumbnail: 'src/assets/sakara .avif', thumbnail_alt: '', disc: 'my pokie made this as a test so i can get jiggy', link: '' },
        { name: '2', thumbnail: 'src/assets/sakara .avif', disc: '', link: '' },
        { name: '3', thumbnail: 'src/assets/sakara .avif', disc: '', link: '' },
        { name: '4', thumbnail: 'src/assets/sakara .avif', disc: '', link: '' },
        { name: '5', thumbnail: 'src/assets/sakara .avif', disc: '', link: '' },
        { name: '6', thumbnail: 'src/assets/sakara .avif', disc: '', link: '' },
        { name: '7', thumbnail: 'src/assets/sakara .avif', disc: '', link: '' },
        { name: '8', thumbnail: 'src/assets/sakara .avif', disc: '', link: '' },
        { name: '9', thumbnail: 'src/assets/sakara .avif', disc: '', link: '' },
        { name: '10', thumbnail: 'src/assets/sakara .avif', disc: '', link: '' },
        { name: '11', thumbnail: 'src/assets/sakara .avif', disc: '', link: '' },
    ]
    return (
        <>
<div className="flex flex-row flex-wrap gap-2 justify-evenly h-full w-full dark:bg-[#212121] shadow-[5px_5px_10px_#1c1c1c,-5px_-5px_10px_#262626] rounded-[10px] border border-pink-300 p-2">
  {projects.map((project, index) => (
    <div key={index} className="relative flex flex-col w-[20rem] h-[28rem]">
      {/* Background image */}
      <div className="absolute inset-0 bg-bcb bg-cover bg-center transform rotate-180 opacity-60 z-0" />
      
      {/* Image at the top */}
      <img src={project.thumbnail} alt={project.thumbnail_alt} className="w-full h-1/2 object-cover z-10" />
      <h1 className="text-lg ml-2 dark:text-[#F5F5F5]">{project.name}</h1>
      
      {/* Content centered below the image */}
      <div className="flex flex-col justify-center items-center flex-grow z-10 ">

        <p className="text-white text-sm text-center mt-2">{project.disc}</p>
      </div>
    </div>
  ))}
</div>



        </>
    )
}