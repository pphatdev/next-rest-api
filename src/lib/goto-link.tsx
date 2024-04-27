import { useRouter } from "next/navigation";

const Goto = ( path:string ): void => {
    const router = useRouter()
    router.push(path)
}

export default Goto