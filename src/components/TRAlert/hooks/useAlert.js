import useAlertConfig from './useAlertConfig';

const useAlert = () => {
	const [, showAlert] = useAlertConfig(false);
	return showAlert;
};

export default useAlert;
