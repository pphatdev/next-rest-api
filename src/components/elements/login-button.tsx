"use client"
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const LoginButton = ({ goto }: { goto?: any }) => {
    const router = useRouter();
    return (
        <motion.button
            onClick={() => router.push( goto || "/login")}
            // @ts-ignore
            initial={{ "--x": "100%", scale: 1 }}
            // @ts-ignore
            animate={{ "--x": "-100%" }}
            whileTap={{ scale: 0.97 }}
            transition={{
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1,
                type: "spring",
                stiffness: 20,
                damping: 15,
                mass: 2,
                scale: {
                    type: "spring",
                    stiffness: 10,
                    damping: 5,
                    mass: 0.1,
                },
            }}
            className="px-5 py-2 rounded-md relative radial-gradient"
        >
            <span className="dark:text-neutral-100 tracking-wide font-poppins text-sm font-medium h-full w-full block relative linear-mask">
                Login
            </span>
            <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
        </motion.button>
    );
};

export default LoginButton;