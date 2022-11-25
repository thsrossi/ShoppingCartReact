import Loader from '../assets/vectors/load-spinner.svg'

export default function Loading() {

    return (
        <div className="mx-auto flex items-center basis-full">
            <img className='animate-spin mb-20' src={Loader} />
        </div>
    )
}