import loaderImg from './assets/loader.gif'

const Loading = () => {
    return ( 
        <div className="h-screen w-screen fixed z-50 bg-gray-100 flex items-center justify-center top-0 left-0">
            <img src={loaderImg} className="w-[100px]" alt="React logo" />
        </div>
     );
}
 
export default Loading;