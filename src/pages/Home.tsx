import Loading from "../components/Loading";
import TopBar from "../components/TopBar";

export default function Home(){
    return (
        <div className="h-screen flex flex-col">
            <TopBar/>
            <Loading />
        </div>
    )
}