import { React, useContext } from 'react';
import { useParams, Link } from 'react-router-dom'
import { CustomContext } from './../../contexts/CustomContext';

const PostsPagination = (props) => {

    const context = useContext(CustomContext);
    const { activeLanguage } = context;

    let ui = activeLanguage;
    ui = context.texts[activeLanguage];

    const { links, meta } = props;


    return (
        links != null && meta != null ? (
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center" >
                    <li key={"prev"} className={`page-item ${meta.current_page == 1 ? "disabled" : ''}`}>
                        <Link className="page-link" to={`/page/${meta.current_page == 1 ? "" : meta.current_page - 1}`}>{ui.prev_page_button}</Link>
                    </li>

                    {
                        (function () {
                            const view = [];
                            for (let i = 1; i <= meta.last_page; i++) {
                                view.push(<li key={i} className={`page-item ${meta.current_page == i ? 'active' : ''}`}><Link className="page-link" to={`/page/${i}`} >{i}</Link></li>);
                            }
                            return view;
                        }())
                    }
                    <li key={"next"} className={`page-item ${meta.current_page == meta.last_page ? "disabled" : ''}`} >
                        <Link className="page-link" to={`/page/${meta.current_page + 1}`}>{ui.next_page_button}</Link>
                    </li>
                </ul>
            </nav>
        ) : ""
    )
}

export default PostsPagination;
