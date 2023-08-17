import { Tab } from "react-bootstrap";
import { useSearchResultContext } from "../store/contexts/SearchResultContext"
import Tabs from 'react-bootstrap/Tabs';
import { Definition ,Meaning } from "../Interfaces/ApiDataInterFace";
import Pronounce from './Pronounce';
import { STATUSES } from "../ENUMS/StatusesEnum";
import {memo} from "react"
const SearchResultSection = () => {
  const { data , status } = useSearchResultContext();
 
  if(status==STATUSES.LOADING){
    return( <h4 className="text-center mt-5">Loading</h4> )
  }
  
  if(data==null){
    return(<h3 className="text-center mt-5">No Data Found ? Please Search Something</h3>)
  }
  

  return (
    <section className=" container  ">
      <div className="search_result_section mt-4  py-3">
        <Tabs
          defaultActiveKey="noun"
          id="uncontrolled-tab-example"
          className="mb-3 mt-3 tabs "
        >
          {
             data.length?data[0].meanings.map((d:Meaning) => {
              return (
                <Tab key={d.partOfSpeech} eventKey={d.partOfSpeech} title={d.partOfSpeech}>
                  <div>
                  <Pronounce audioUrl={data[0].phonetics[0].audio}/>
                    <span className="ms-2">{data[0].phonetic}</span>
                  </div>
                  <ol className="mt-4">
                  {d.definitions.map((e:Definition)=>{
                    return(<li>{e.definition}</li>)
                  })}
                  </ol>
                </Tab>)
            }):"" 

          }
        </Tabs>
      </div>
    </section>
  )
}

export default memo(SearchResultSection)