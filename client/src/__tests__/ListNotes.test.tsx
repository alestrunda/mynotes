import * as React from "react";
import ListNotes from "../components/ListNotes";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders no items", () => {
  const list = shallow(<ListNotes notes={[]} />);
  expect(list.find("NotePreview").length).toEqual(0);
  expect(list.find(".paragraph-no-data").length).toEqual(1);
});

it("renders items", () => {
  const items = [
    { id: "1", title: "Lorem ipsum", description: "Lorem ipsum" },
    { id: "2", title: "Lorem ipsum", description: "Lorem ipsum" },
    { id: "3", title: "Lorem ipsum", description: "Lorem ipsum" }
  ];
  const list = shallow(<ListNotes notes={items} />);
  expect(list.find("NotePreview").length).toEqual(items.length);
});
