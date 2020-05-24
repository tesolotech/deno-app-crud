export interface Employee {
    _id: {
      $oid: string;
    };
    name: string;
    age: number;
    salary: number;
  }