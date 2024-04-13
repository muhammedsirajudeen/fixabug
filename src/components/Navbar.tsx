import Link from "next/link"
export default function Navbar(){
    return(

        <nav className="flex items-center w-full justify-evenly">
            <a href="/" className="text-xl font-bold">FIX A BUG</a>  
            <a href="/blog" className="  text-sm">Blog</a>
            <a href="/quote" className=" text-sm">Contact</a>
        </nav>


    )
}