import ModuleList from "../Modules/ModuleList";
import "./index.css"

function Home() {
    return (

        <div className="row">

            <div className="col-8">

                <ModuleList />
            </div>

            <div className="col-4" id="col-style">
                <h2 >Status</h2>
                <div className="row" >
                    <button class="btn btn-sm btn-light">Import Existing Content</button>
                    <button class="btn btn-sm btn-light">Import From Commons</button>
                    <button class="btn btn-sm btn-light">Choose Home Page</button>
                    <button class="btn btn-sm btn-light">View Course Stream</button>
                    <button class="btn btn-sm btn-light">New Announcement</button>
                    <button class="btn btn-sm btn-light">New Analytics</button>
                    <button class="btn btn-sm btn-light">View Course Notifications</button>

                    <div>
                        <b>To Do</b>
                        <hr />
                        <p>Something</p>
                    </div>

                    <div>
                        <b>Coming Up</b>
                        <hr />
                        <p>Something</p>
                    </div>

                </div>

            </div>

        </div >

    );
}
export default Home;