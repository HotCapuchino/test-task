import { Card, CardContent } from "@mui/material";
import { UserModel } from "api/models/UserModel";
import { TableColumn } from "components/CustomTable/types";
import UserInfo from "components/UserInfo";


export const usersColumns: TableColumn<UserModel>[] = [
    {
        columnKey: 'user',
        render: (value: UserModel, _: unknown): JSX.Element => {
            return (
                <Card>
                    <CardContent>
                        <UserInfo user={value}/>
                    </CardContent>
                </Card>
            );
        }
    }
];