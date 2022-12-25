import ReactDOM from "react-dom";
import { Typography } from "@mui/material";
import ErrorSnackbar from "components/ErrorSnackbar";

export class BasicStore {
    protected showErrorSnackbar(error: {message: string}) {
        const hideAfter = 5000;

        const id = 'notification-root';

        let notificationContainer = document.getElementById(id);
        if (!notificationContainer) {
            notificationContainer = document.createElement('div');
            notificationContainer.style.width = '100%';
            notificationContainer.style.height = '100%';
            notificationContainer.style.position = 'absolute';
            notificationContainer.style.top = '0';
            notificationContainer.style.left = '0';
            notificationContainer.id = id;

            document.body.appendChild(notificationContainer);
        }

        ReactDOM.render(
            <ErrorSnackbar>
                <Typography>{error.message}</Typography>
            </ErrorSnackbar>,
            document.getElementById(id)
        );

        setTimeout(() => {
            ReactDOM.unmountComponentAtNode(document.getElementById(id));
        }, hideAfter);
    }
}