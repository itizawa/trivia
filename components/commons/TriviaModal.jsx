import React, { useState, useRef } from 'react';
import Link from 'next/link';

import { Modal, ModalBody, ModalFooter } from 'reactstrap';

import { fromTimeStampToDate } from '@lib/utils/fromTimeStampToDate';

import TriviaListContainer from '@containers/TriviaListContainer';

function TriviaModal() {
  const { triviaForModal, closeTriviaModal, isOpenTriviaModal } = TriviaListContainer.useContainer();
  const creator = triviaForModal?.creator;

  const [count, setCount] = useState(0);
  const triviaCardEl = useRef();

  function closeModalHandler() {
    setCount(0);
    if (closeTriviaModal != null) {
      closeTriviaModal();
    }
  }

  function generateFlowingWords() {
    const div = document.createElement('div');
    div.classList.add('trivia-scroll');
    div.innerText = 'へぇ';
    triviaCardEl.current.prepend(div);
  }

  function pushHeButtonHandler() {
    setCount(count + 1);
    generateFlowingWords();
  }
  return (
    <Modal size="lg" isOpen={isOpenTriviaModal} toggle={closeModalHandler}>
      <ModalBody>
        <div>
          <img height="24px" className="rounded-circle bg-white mr-2" src={creator?.image} />
          <span className="text-center">{creator?.name} </span><br />
        </div>
        <div className="d-flex">
          <span className="mr-auto">{fromTimeStampToDate(triviaForModal?.createdAt)}</span>
          <span>合計 {count + triviaForModal?.acquisitionCount} へえ</span>
        </div>
        <div className="trivia-card" ref={triviaCardEl}>
          <img
            width="100%"
            height="auto"
            src={`https://trivia-ogp.vercel.app/api/ogp?forwardText=${triviaForModal?.forwardText}&backwardText=${triviaForModal?.backwardText}&isShow=true`}
            className="trivia-card-img rounded"
          />
        </div>
        <div className="row mt-2">
          <div className="col-4">
            {count} へえ
          </div>
          <div className="col-4 text-center">
            <button
              type="button"
              className="btn btn-info btn-trivia text-snow rounded-circle"
              onClick={pushHeButtonHandler}
              disabled={count >= 20}
            >
              へぇ
            </button>
          </div>
          <div className="col-4 text-right">
          </div>
        </div>

      </ModalBody>
      <ModalFooter>
        <Link href={`/trivias/${triviaForModal?._id}`}>
          <a className="text-center">
            <span className="ml-2">もっと見る</span>
          </a>
        </Link>
      </ModalFooter>
    </Modal>
  );
}

export default TriviaModal;
