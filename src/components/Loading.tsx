import Loader from '../assets/vectors/loader.png'

export default function Loading() {

    return (
        <div className="mx-auto flex items-center basis-full">
            <img className='animate-spin' src={Loader} />
        </div>
    )
}