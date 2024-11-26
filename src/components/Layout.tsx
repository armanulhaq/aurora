import { PropsWithChildren } from "react";
import Header from "./Header";

const layout = ({ children }: PropsWithChildren) => {
    return (
        <div className="bg-gradient-to-br from-background to-muted">
            <Header />
            <main className="min-h-screen container mx-auto px-4 py-8">
                {" "}
                {/* min-h-screen sets the minimum height to 100vh, but it starts calculating
                    from where the element is positioned, not from the top of the viewport
                    container: Makes the element follow container width constraints
                    mx-auto: Centers the container horizontally using auto margins
                    px-4: Adds horizontal padding of 1rem (16px)
                    py-8: Adds vertical padding of 2rem (32px)
                */}
                {children}
            </main>
            <footer className="border-t backdrop-blur py-12 supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-4 text-center text-gray-400">
                    Made with ❤️ by Arman
                </div>
            </footer>
        </div>
    );
};

export default layout;
