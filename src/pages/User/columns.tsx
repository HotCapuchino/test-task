import { PostModel } from "api/models/PostModel";
import { TableColumn } from "components/CustomTable/types";
import Post from "components/Post";


export const postsColumns: TableColumn<PostModel>[] = [
    {
        columnKey: 'post',
        render: (value: PostModel, _: unknown): JSX.Element => <Post post={value}/>,
    }
]