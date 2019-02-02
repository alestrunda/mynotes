import * as React from "react";
import NoteDetail from "../components/NoteDetail";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("open edit form when clicked on edit button", () => {
  const note = { id: "1", title: "Lorem ipsum", description: "Lorem ipsum" };
  const onDeleted = jest.fn();
  const noteDetail = shallow(<NoteDetail onDeleted={onDeleted} {...note} />);
  expect(noteDetail.find("NoteEdit").length).toEqual(0);
  noteDetail.find('[data-test-id="edit"]').simulate("click");
  expect(noteDetail.find("NoteEdit").length).toEqual(1);
});
