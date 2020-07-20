import useConfig from './useConfig';
const useAlert = () => {
	const { showAlert, closeAlert } = useConfig();
	return { showAlert, closeAlert };
};

export default useAlert;
