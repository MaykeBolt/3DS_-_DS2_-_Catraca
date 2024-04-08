import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
    getFirestore,
    AggregateField,
    AggregateQuerySnapshot,
    CollectionReference,
    DocumentReference,
    DocumentSnapshot,
    FieldPath,
    FieldValue,
    Firestore,
    FirestoreError,
    GeoPoint,
    LoadBundleTask,
    PersistentCacheIndexManager,
    Query, QueryCompositeFilterConstraint, QueryConstraint, QueryDocumentSnapshot,
    QueryEndAtConstraint, QueryFieldFilterConstraint,QueryLimitConstraint,
    QueryOrderByConstraint,QuerySnapshot,QueryStartAtConstraint,
    SnapshotMetadata,Timestamp,Transaction,WriteBatch    
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js"
    
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { firebaseConfig } from "./fbConfig.js";

const App = initializeApp(firebaseConfig);

const Auth = getAuth(App);

// const Firestore = getFirestore();

export{App, Auth}