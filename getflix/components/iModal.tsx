interface InfoModalProps {
    onClose: any;
}
const InfoModal: React.FC<InfoModalProps> = ({onClose}) => {
    const movies = appUseSelector(state => state.movies);
    const dispatch = appUseDispatch();
    const router = useRouter();


    const isVisible = movies.showModal
    if(!isVisible) return null;

    const data  = movies.movie[0];


    const handleClose = () => {
      dispatch(movieActions.hideModal())
    };


    export default InfoModal