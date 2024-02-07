import { Page } from "../../components/Page/Page"
import { PageHeader } from "../../components/PageHeader/page_header"
import { TodoList } from "../../components/Todolist/todolist";
export const Homepage = () => {

    return (
        <Page label={"Homepage"}>
            <PageHeader />
            <TodoList />
        </Page>
    )
}
