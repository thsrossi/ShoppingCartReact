import Loader from '../assets/vectors/loader.png'

export default function Loading() {

    return (
        <div className="mx-auto flex items-center basis-full">
            <img className='animate-spin mb-20' src={Loader} />
        </div>
    )
}